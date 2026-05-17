
import requests
import xml.etree.ElementTree as ET
from datetime import datetime

feeds = [
    "https://techcrunch.com/feed/",
    "https://www.theverge.com/rss/index.xml"
]

def fetch_news():
    news_items = []
    headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
    for url in feeds:
        try:
            print(f"Fetching {url}...")
            response = requests.get(url, headers=headers, timeout=15)
            response.raise_for_status()
            
            root = ET.fromstring(response.content)
            for item in root.findall('.//item'):
                title = item.find('title').text
                link = item.find('link').text
                pub_date_str = item.find('pubDate').text
                
                # Parse date
                try:
                    pub_date = datetime.strptime(pub_date_str, '%a, %d %b %Y %H:%M:%S %z')
                except:
                    pub_date = datetime.now()

                # AI keyword check
                keywords = ['ai', 'llm', 'openai', 'anthropic', 'google', 'gemint', 'gpt', 'claude', 'mistral', 'llama']
                if any(kw in title.lower() or kw in link.lower() for kw in keywords):
                    news_items.append({
                        'title': title,
                        'link': link,
                        'pub_date': pub_date,
                        'source': url,
                        'pub_date_str': pub_date_str
                    })
            print(f"Found {len(news_items)} potential AI news items from {url} so far.")
        except Exception as e:
            print(f"Error fetching {url}: {e}")

    return news_items

if __name__ == "__main__":
    results = fetch_news()
    print("\n--- AI News Found ---")
    if not results:
        print("No news found.")
    else:
        for res in results:
            print(f"[{res['pub_date_str']}] {res['title']} ({res['link']})")
