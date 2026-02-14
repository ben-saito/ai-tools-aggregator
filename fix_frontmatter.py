#!/usr/bin/env python3
import os
import re
from pathlib import Path

BLOG_DIR = Path("src/content/blog")

def get_category(tags, filename):
    """Determine category from tags and filename"""
    is_ja = filename.endswith('-ja.md')
    
    # Check tags
    tag_str = ' '.join(tags).lower()
    
    if is_ja:
        if any(t in tag_str for t in ['比較', 'vs']):
            return "比較分析"
        elif any(t in tag_str for t in ['業界動向', 'トレンド', '動向']):
            return "業界動向"
        elif any(t in tag_str for t in ['技術解説', '仕組み', 'とは']):
            return "技術解説"
        else:
            return "ガイド"
    else:
        if 'comparison' in tag_str or 'vs' in tag_str:
            return "Comparison"
        elif 'industry' in tag_str or 'trends' in tag_str:
            return "Industry Trends"
        elif 'technical' in tag_str:
            return "Technical"
        else:
            return "Guide"

def fix_frontmatter(filepath):
    """Fix frontmatter in a blog post file"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if has pubDate
    if 'pubDate:' not in content:
        return False
    
    # Extract frontmatter and body
    parts = content.split('---\n', 2)
    if len(parts) < 3:
        return False
    
    frontmatter_text = parts[1]
    body = parts[2]
    
    # Parse frontmatter
    fm = {}
    for line in frontmatter_text.strip().split('\n'):
        match = re.match(r'^(\w+):\s*(.+)$', line)
        if match:
            key, value = match.groups()
            # Remove quotes
            value = value.strip('"')
            fm[key] = value
    
    # Parse tags (handle array format)
    tags_raw = fm.get('tags', '[]')
    tags_match = re.findall(r'"([^"]+)"', tags_raw)
    tags = tags_match if tags_match else [t.strip() for t in tags_raw.strip('[]').split(',')]
    
    # Determine language and author
    is_ja = filepath.name.endswith('-ja.md')
    lang = "ja" if is_ja else "en"
    author = "AI Tools Hub 編集部" if is_ja else "AI Tools Hub Editorial Team"
    
    # Convert pubDate to publishedAt
    pub_date = fm.get('pubDate', '2026-02-14')
    if 'T' not in pub_date:
        published_at = f"{pub_date}T16:00:00+09:00"
    else:
        published_at = pub_date
    
    # Determine category
    category = get_category(tags, filepath.name)
    
    # Get image or generate ogImage path
    og_image = fm.get('image', f"/images/blog/{filepath.stem}.png")
    
    # Build new frontmatter
    tags_str = ', '.join(f'"{t}"' for t in tags)
    keywords_str = ', '.join(tags)
    
    new_fm_lines = [
        '---',
        f'title: "{fm.get("title", "")}"',
        f'description: "{fm.get("description", "")}"',
        f'publishedAt: "{published_at}"',
        f'author: "{author}"',
        f'category: "{category}"',
        f'tags: [{tags_str}]',
        'featured: false',
        f'lang: "{lang}"',
        'seo:',
        f'  keywords: "{keywords_str}"',
        f'  ogImage: "{og_image}"',
        '---'
    ]
    
    # Rebuild content
    new_content = '\n'.join(new_fm_lines) + '\n' + body
    
    # Write back
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    return True

# Process all files
for filepath in BLOG_DIR.glob('*.md'):
    if fix_frontmatter(filepath):
        print(f"Fixed: {filepath.name}")

print("Done!")
