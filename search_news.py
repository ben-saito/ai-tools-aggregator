import requests
from datetime import datetime, timedelta

feeds = [
    "https://techcrunch.com/feed/",
    "https://www.theverge.com/rss/index.xml",
    # Adding more as I can find them
]

def search_news():
    news_items = []
    for url in feeds:
        try:
            response = requests.get(url, timeout=10)
            if response.status_code == 200:
                # Simplistic parsing for demonstration
                # In a real scenario, I'd use feedparser
                if "techcrunch" in url:
                    # Just looking for some keywords in the text for now
                    content = response.text
                    if "AI" in content or "LLM" in content:
                        news_items.append(f"Found potential AI news in TechCrunch feed")
                elif "theverge" in url:
                    content = response.text
                    if "AI" in content or "LLM" in content:
                        news_items.append(f"Found potential AI news in The Verge feed")
        except Exception as e:
            print(f"Error fetching {url}: {e}")
    
    if not news_items:
        print("No news found via RSS feeds.")
    else:
        for item in news_items:
            print(item)

if __name__ == "__main__":
    search_news()
