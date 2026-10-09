#!/bin/bash
# Fetches stone images via z-ai image-search, extracts URLs, downloads locally
set -u
cd /home/z/my-project
declare -A QUERIES=(
  ["img-tt"]="travertine stone texture beige natural surface closeup"
  ["img-bm"]="black marble gold veins elegant texture"
  ["img-villa"]="luxury modern villa stone facade exterior architecture"
  ["img-slabs"]="marble granite stone slabs stacked showroom"
  ["img-cnc"]="stone cutting industrial workshop saw granite"
  ["img-carrara"]="white carrara marble texture gray veins"
)
for name in img-tt img-bm img-villa img-slabs img-cnc img-carrara; do
  q="${QUERIES[$name]}"
  echo "=== $name : $q"
  z-ai image-search -q "$q" --count 4 --gl us --no-rank 2>/dev/null | python3 -c "
import sys, json, re
raw = sys.stdin.read()
m = re.search(r'\{.*\}', raw, re.S)
if not m:
    print('NOJSON'); sys.exit(0)
try:
    d = json.loads(m.group(0))
except Exception as e:
    print('PARSEFAIL', e); sys.exit(0)
for i, r in enumerate(d.get('results', [])[:3]):
    print(r['original_url'])
" > /tmp/$name.txt
  n=0
  while read -r url; do
    [ -z "$url" ] && continue
    n=$((n+1))
    ext="${url##*.}"
    case "$ext" in jpg|jpeg|png|webp) ;; *) ext="jpg";; esac
    curl -sL --max-time 60 -o "public/images/${name}-${n}.${ext}" "$url" && echo "  saved ${name}-${n}.${ext} ($(stat -c%s public/images/${name}-${n}.${ext}) bytes)"
  done < /tmp/$name.txt
done
echo "=== FINAL ==="
ls -la public/images/
