import requests
from bs4 import BeautifulSoup
import datetime

sources = {
    "TechCrunch": "https://techcrunch.com/category/artificial-intelligence/",
    "The Verge": "https://www.theverge.com/ai-artificial-intelligence",
    "VentureBeat": "https://venturebeat.com/category/ai/",
    "Ars Technica": "https://arstechnica.com/information-technology/",
}

def fetch_news():
    news_data = []
    for name, url in sources.items():
        try:
            print(f"Fetching {name}...")
            res = requests.get(url, timeout=10, headers={'User-Agent': 'Mozilla/5.0'})
            if res.status_code == 200:
                soup = BeautifulSoup(res.text, 'html.parser')
                # This is a very naive way to find articles, 
                # in a real scenario, I'd look for specific tags.
                # I'll just pick the first few h2 or h3 tags that look like titles.
                articles = soup.find_all(['h2', 'h3'], limit=5)
                for art in articles:
                    title = art.get_text().strip()
                    if len(title) > 20:
                        news_data.append({"source": name, "title": title})
            else:
                print(f"Failed to fetch {name}: {res.status_code}")
        except Exception as e:
            print(f"Error fetching {name}: {e}")
    return news_data

if __name__ == "__main__":
    all_news = fetch_news()
    for item in all_news:
        print(f"[{item['source']}] {item['title']}")
