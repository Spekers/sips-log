#!/usr/bin/env bash

set -e
cd "$(dirname "$0")"/../../
source ./bin/build/vars.sh

mkdir -p "$(dirname "$1")"

sed \
	-e "s/★PAGE_TITLE★/$BLOG_NAME — About/g" \
	-e "s/★OG_TITLE★/$BLOG_NAME — About/g" \
	-e "s/★OG_TYPE★/website/g" \
	-e "s/★TWITTER_CARD_TYPE★/summary/g" \
	-e "/★EXTRA_TAGS★/{
		i <meta property=\"og:image\" content=\"$BLOG_URL/fleuron.png\"/>
		i <meta name=\"description\" content=\"About Sip\"/>
	}" \
	-e "/★PAGE_CONTENT★/{
		s/★PAGE_CONTENT★//g
		r /dev/stdin
	}" \
	./parts/template.html < ./parts/about.html > "$1"
