import xml.etree.ElementTree as ET
import os

def parse_techcrunch_rss(file_path):
    tree = ET.parse(file_path)
    root = tree.getroot()
    news_items = []

    for item in root.findall('.//item'):
        title = item.find('title').text
        link = item.find('link').text
        description = item.find('description').text
        pub_date = item.find('pubDate').text
        
        categories = [category.text for category or category in item.findall('.//category')]
        
        news_items.append({
            'title': title,
            'link': link,
            'description': description,
            'pub_date': pub_date,
            'categories': categories
        })
    return news_items

if __name__ == "__main__":
    rss_file = os.path.expanduser('~/git/ai-news-repo/techcrunch_feed.xml')
    try:
        news = parse_techcrunch_rss(rss_file)
        for i, article in enumerate(news):
            print(f"--- {i} ---")
            print(f"Title: {article['title']}")
            print(f"Link: {article['link']}")
            print(f"Date: {article['pub_date']}")
            print(f"Categories: {article['categories']}")
            print(f"Description: {article['description']}")
    except Exception as e:
        print(f"Error: {e}")
