import sys
import re
from datetime import datetime

def parse_rss(content):
    items = []
    # Simple regex to parse RSS items
    item_pattern = re.compile(r'<item>(.*?)</item>', re.DOTALL)
    title_pattern = re.compile(r'<title>(.*?)</title>')
    link_pattern = re.compile(r'<link>(.*?)</link>')
    description_pattern = re.compile(r'<description><!\[CDATA\[(.*?)\]\]></description>|<description>(.*?)</description>', re.DOTALL)

    for item_match in item_pattern.finditer(content):
        item_text = item_match.group(1)
        title_match = title_pattern.search(item_text)
        link_match = link_pattern.search(item_text)
        desc_match = description_pattern.search(item_text)

        if title_match and link_match:
            title = title_match.group(1).replace('&amp;', '&').replace('&#8217;', "'")
            link = link_match.group(1)
            description = ""
            if desc_match:
                description = desc_match.group(1) or desc_match.group(2)
                description = description.replace('<![CDATA[', '').replace(']]>', '').strip()
            
            items.append({
                'title': title,
                'link': link,
                'description': description
            })
    return items

if __name__ == "__main__":
    input_text = sys.stdin.read()
    parsed_items = parse_rss(input_text)
    for item in parsed_items:
        print(f"TITLE: {item['title']}")
        print(f"LINK: {item['link']}")
        print(f"DESC: {item['description']}")
        print("---")
