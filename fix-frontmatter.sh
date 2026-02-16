#!/bin/bash

# Find all files with pubDate and fix them
for file in work/ai-tools-aggregator/src/content/blog/*.md; do
  if grep -q "^pubDate:" "$file"; then
    echo "Fixing: $(basename $file)"
    
    # Determine language
    if [[ $file == *"-ja.md" ]]; then
      lang="ja"
      author="AI Tools Hub 編集部"
    else
      lang="en"
      author="AI Tools Hub Editorial Team"
    fi
    
    # Extract current frontmatter
    title=$(grep "^title:" "$file" | sed 's/^title: "\(.*\)"$/\1/' | sed 's/^title: //')
    desc=$(grep "^description:" "$file" | sed 's/^description: "\(.*\)"$/\1/' | sed 's/^description: //')
    pubdate=$(grep "^pubDate:" "$file" | sed 's/^pubDate: //')
    tags=$(grep "^tags:" "$file" | sed 's/^tags: //')
    image=$(grep "^image:" "$file" | sed 's/^image: //')
    
    # Convert pubDate to publishedAt
    if [[ $pubdate != *"T"* ]]; then
      publishedAt="${pubdate}T16:00:00+09:00"
    else
      publishedAt="$pubdate"
    fi
    
    # Determine category based on tags/filename
    category="ガイド"
    if [[ $file == *"-ja.md" ]]; then
      if echo "$tags" | grep -q "比較"; then category="比較分析"
      elif echo "$tags" | grep -q "業界"; then category="業界動向"
      elif echo "$tags" | grep -q "トレンド"; then category="業界動向"
      elif echo "$tags" | grep -q "技術解説"; then category="技術解説"
      elif echo "$tags" | grep -q "ガイド"; then category="ガイド"
      fi
    else
      if echo "$tags" | grep -q "Comparison"; then category="Comparison"
      elif echo "$tags" | grep -q "Industry"; then category="Industry Trends"
      elif echo "$tags" | grep -q "Technical"; then category="Technical"
      elif echo "$tags" | grep -q "Guide"; then category="Guide"
      else category="Guide"
      fi
    fi
    
    # Set ogImage
    ogImage="/images/blog/$(basename $file .md).png"
    
    # Get body (everything after second ---)
    body=$(awk '/^---$/ {c++; if (c==2) {p=1; next}} p' "$file")
    
    # Write new frontmatter + body
    cat > "$file" << EOF
---
title: "$title"
description: "$desc"
publishedAt: "$publishedAt"
author: "$author"
category: "$category"
tags: $tags
featured: false
lang: "$lang"
seo:
  keywords: "$(echo $tags | sed 's/\[//g' | sed 's/\]//g' | sed 's/"//g')"
  ogImage: "$ogImage"
---
$body
EOF
    
  fi
done

echo "Done!"
