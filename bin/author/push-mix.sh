#!/usr/bin/env bash

# Pushes a mix to Mixcloud.
#
#   push-mix.sh mixes/<mix>.md --audio <file> --cover <file>   first upload
#   push-mix.sh mixes/<mix>.md [--cover <file>]                update title, description and tracklist
#   push-mix.sh mixes/<mix>.md --dry-run                       print what would be sent
#
# Afterwards the "mixcloud" and "cover" keys in the mix's front matter point to
# Mixcloud. The access token comes from the macOS Keychain, see mixcloud-login.sh.

set -e
cd "$(dirname "$0")"/../../

API="https://api.mixcloud.com"
KEYCHAIN_SERVICE="sips-log-mixcloud"

MIX_PATH="$1"
shift || true
AUDIO=""
COVER=""
DRY_RUN=""

while test $# != 0
do
	case "$1" in
	--audio) AUDIO="$2"; shift ;;
	--cover) COVER="$2"; shift ;;
	--dry-run) DRY_RUN=t ;;
	*) echo "unknown argument: $1" >&2; exit 2 ;;
	esac
	shift
done

if [ ! -f "$MIX_PATH" ]; then
	echo "usage: $0 mixes/<mix>.md [--audio <file>] [--cover <file>] [--dry-run]" >&2
	exit 2
fi

for FILE in "$AUDIO" "$COVER"; do
	if [ -n "$FILE" ] && [ ! -f "$FILE" ]; then
		echo "file not found: $FILE" >&2
		exit 1
	fi
done

MIX_FRONT_MATTER=$(sed -n '2,/^---$/{ /^---$/d; p; }' "$MIX_PATH")
MIX_KEY=$(echo "$MIX_FRONT_MATTER" | jq -r '.mixcloud // empty')
BODY=$(./bin/build/strip-front-matter.sh "$MIX_PATH")

extract_section() {
	echo "$BODY" | awk -v s="$1" '
		/^## / { in_s = ($0 == "## " s) ? 1 : 0; next }
		in_s { print }
	'
}

NAME=$(echo "$BODY" | grep -m1 '^# ' | sed -e 's/^#[ ]*//' -e 's/[ ]*$//')
DESCRIPTION=$(extract_section "Description" | pandoc --from=markdown-smart --to=plain --wrap=none)

# One "artist<TAB>song<TAB>seconds" line per track, from lines like "- 01:02 — Artist - Song"
SECTIONS=$(extract_section "Tracklist" | python3 -c '
import re, sys
ok = True
for line in sys.stdin:
	m = re.match(r"^\s*-\s+((?:\d+:)?\d+:\d+)\s+(?:[—-]\s+)?(.*?)\s*$", line)
	if not m:
		continue
	ts, rest = m.groups()
	if " - " not in rest:
		print(f"tracklist line needs \"Artist - Song\": {line.strip()}", file=sys.stderr)
		ok = False
		continue
	artist, song = rest.split(" - ", 1)
	seconds = 0
	for part in ts.split(":"):
		seconds = seconds * 60 + int(part)
	print(f"{artist.strip()}\t{song.strip()}\t{seconds}")
sys.exit(0 if ok else 1)
')

if [ -z "$NAME" ]; then
	echo "$MIX_PATH has no title" >&2
	exit 1
fi
if [ "${#DESCRIPTION}" -gt 1000 ]; then
	echo "description is ${#DESCRIPTION} characters, Mixcloud allows 1000" >&2
	exit 1
fi
if [ -z "$MIX_KEY" ] && [ -z "$AUDIO" ]; then
	echo "$MIX_PATH is not on Mixcloud yet, pass --audio <file> (and --cover <file>)" >&2
	exit 1
fi

FORM=(--form-string "name=$NAME" --form-string "description=$DESCRIPTION")
i=0
while IFS=$'\t' read -r ARTIST SONG START; do
	FORM+=(--form-string "sections-$i-artist=$ARTIST" --form-string "sections-$i-song=$SONG" --form-string "sections-$i-start_time=$START")
	i=$((i + 1))
done <<< "$SECTIONS"
[ -n "$COVER" ] && FORM+=(-F "picture=@$COVER")
[ -n "$AUDIO" ] && FORM+=(-F "mp3=@$AUDIO")

if [ -n "$MIX_KEY" ]; then
	ENDPOINT="$API/upload${MIX_KEY}edit/"
else
	ENDPOINT="$API/upload/"
fi

if [ -n "$DRY_RUN" ]; then
	echo "POST $ENDPOINT"
	printf '  %s\n' "${FORM[@]}" | grep -v -e '^  --form-string$' -e '^  -F$'
	exit 0
fi

TOKEN=$(security find-generic-password -s "$KEYCHAIN_SERVICE" -w 2>/dev/null) || {
	echo "no Mixcloud token in the Keychain, run ./bin/author/mixcloud-login.sh first" >&2
	exit 1
}

echo "pushing $NAME to Mixcloud..."
RESPONSE=$(curl -sS --progress-bar "${FORM[@]}" "$ENDPOINT?access_token=$TOKEN")

if [ "$(echo "$RESPONSE" | jq -r '.result.success // false')" != "true" ]; then
	echo "Mixcloud refused the push:" >&2
	echo "$RESPONSE" | jq . >&2 || echo "$RESPONSE" >&2
	exit 1
fi

MIX_KEY=$(echo "$RESPONSE" | jq -r --arg k "$MIX_KEY" '.result.key // $k')
MIX_COVER=$(curl -sS "$API$MIX_KEY" | jq -r '.pictures["1024wx1024h"] // empty')

MIX_KEY="$MIX_KEY" MIX_COVER="$MIX_COVER" python3 - "$MIX_PATH" <<'PY'
import json, os, sys, pathlib
p = pathlib.Path(sys.argv[1])
_, fm, body = p.read_text().split("---\n", 2)
meta = json.loads(fm)
meta["mixcloud"] = os.environ["MIX_KEY"]
if os.environ["MIX_COVER"]:
	meta["cover"] = os.environ["MIX_COVER"]
meta.pop("audio", None)
p.write_text("---\n" + json.dumps(meta, indent="\t", ensure_ascii=False) + "\n---\n" + body)
PY

echo "pushed: https://www.mixcloud.com$MIX_KEY"
if [ -z "$MIX_COVER" ]; then
	echo "Mixcloud has no cover yet, run this again in a minute to fill it in" >&2
fi
