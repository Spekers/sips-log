#!/usr/bin/env bash

set -e

cd "$(dirname "$0")"/../../

MIX_SLUG="$1"

if [ "$#" -ne 1 ]; then
	MIX_SLUG=$(date +"%d-%m-%Y")
fi

MIX_PATH=./mixes/$(date +'%s')-$MIX_SLUG.md
TIMEZONE=$(date +%Z)

cat <<MIX_START_TEXT > "$MIX_PATH"
---
{
	"timezone": "$TIMEZONE"
}
---
#

## Description

## Tracklist
- 00:00 — Artist - Song

MIX_START_TEXT

$EDITOR "$MIX_PATH"
