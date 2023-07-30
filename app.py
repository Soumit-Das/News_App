import requests
import json
from flask import Flask
from datetime import datetime,timedelta

app = Flask(__name__)

# query = input("What type of news you want to see?")

# url = f"https://newsapi.org/v2/everything?q={query}&from=2023-06-28&sortBy=publishedAt&apiKey=1fcc74500ce5439abd865dbb5eef9037"



# print(news)
# for article in news["articles"]:
#     print(article["title"])
#     print(article["description"])
#     print("------------------------------------------------")


@app.route("/")
def hello():
    return "hello"

urlTwo = "https://newsapi.org/v2/top-headlines/sources?apiKey=1fcc74500ce5439abd865dbb5eef9037" 


@app.route("/news/<topic>")
def news(topic):
    yesterday_datetime = datetime.now() - timedelta(days=1)
    yesterday_date = yesterday_datetime.strftime('%Y-%m-%d')
    print(yesterday_date)
    url = f"https://newsapi.org/v2/everything?q={topic}&from={yesterday_date}&sortBy=publishedAt&language=en&pageSize=100&apiKey=1fcc74500ce5439abd865dbb5eef9037"
    req = requests.get(url)
    news = json.loads(req.text)
    # print(news)
    return news





if __name__ == "__main__":
    app.run(port=8088)    