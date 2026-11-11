#!/usr/bin/env bash
# Usage: assemble-sitemap.sh <source files from entries/, mixes/, newsletters/>... <output>

set -e
cd "$(dirname "$0")"/../../
source ./bin/build/vars.sh

# Last commit date of a file (YYYY-MM-DD), falling back to its mtime if uncommitted.
lastmod() {
	local d
	d=$(git log -1 --format=%cs -- "$1" 2>/dev/null)
	if [[ -z "$d" ]]; then
		d=$(date -r "$1" +%F)
	fi
	echo "$d"
}

max_date() {
	[[ -n "$2" && "$2" > "$1" ]] && echo "$2" || echo "$1"
}

URLS=()
LATEST_ALL=""
LATEST_ENTRIES=""
LATEST_MIXES=""
LATEST_LETTERS=""

url_entry() {
	URLS+=("<url><loc>$BLOG_URL$1</loc>${2:+<lastmod>$2</lastmod>}</url>")
}

while (( $# > 1 ))
do
	SRC="$1"
	SLUG=$(basename "$SRC" | cut -d- -f2- | cut -d. -f1)
	MOD=$(lastmod "$SRC")
	LATEST_ALL=$(max_date "$LATEST_ALL" "$MOD")
	case "$SRC" in
		entries/*)
			url_entry "/$SLUG/" "$MOD"
			LATEST_ENTRIES=$(max_date "$LATEST_ENTRIES" "$MOD")
			;;
		mixes/*)
			url_entry "/mixes/$SLUG/" "$MOD"
			LATEST_MIXES=$(max_date "$LATEST_MIXES" "$MOD")
			;;
		newsletters/*)
			url_entry "/newsletters/$SLUG/" "$MOD"
			LATEST_LETTERS=$(max_date "$LATEST_LETTERS" "$MOD")
			;;
	esac
	shift
done

{
	echo '<?xml version="1.0" encoding="UTF-8"?>'
	echo '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
	echo "<url><loc>$BLOG_URL/</loc>${LATEST_ALL:+<lastmod>$LATEST_ALL</lastmod>}</url>"
	echo "<url><loc>$BLOG_URL/journal/</loc>${LATEST_ENTRIES:+<lastmod>$LATEST_ENTRIES</lastmod>}</url>"
	echo "<url><loc>$BLOG_URL/about/</loc><lastmod>$(lastmod parts/about.html)</lastmod></url>"
	[[ -n "$LATEST_MIXES" ]] && echo "<url><loc>$BLOG_URL/mixes/</loc><lastmod>$LATEST_MIXES</lastmod></url>"
	[[ -n "$LATEST_LETTERS" ]] && echo "<url><loc>$BLOG_URL/newsletters/</loc><lastmod>$LATEST_LETTERS</lastmod></url>"
	printf '%s\n' "${URLS[@]}"
	echo '</urlset>'
} > "$1"
