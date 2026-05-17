import requests
import xml.etree.ElementTree as ET

feeds = [
    "https://techcrunch.com/feed/",
    "https://www.theverge.com/rss/index.xml"
]

def fetch_news():
    news_items = []
    for url in feeds:
        try:
            print(f"Fetching {url}...")
            response = requests.get(url, timeout=10)
            response.raise_for_status()
            
            root = ET.fromstring(response.content)
            # RSS feed structure: channel -> item
            for item in root.findall('.//item'):
                title = item.find('title').text
                link = item.find('link').text
                pub_date = item.find('pubDate').text
                
                # Basic AI keyword check
                if any(kw in title.lower() or kw in link.lower() for kw in ['ai', 'llm', 'openai', 'anthropic', 'google', 'gemini', 'gpt']):
                    news_items.append({
                        'title': title,
                        'link': link,
                        'pub_date': pub_date,
                        'source': url
                    })
            print(f"Found {len(news_items)} potential AI news items from {url}")
        except Exception as e:
            print(f"Error fetching {url}: {e}")

    return news_items

if __name__ == "__main__":
    results = fetch_news()
    print("\n--- Summary ---")
    for res in results[:5]:  # Show first 5
        print(f"[{res['pub_date']}] {res['title']} ({res['link']})")
