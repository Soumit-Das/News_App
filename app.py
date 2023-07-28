import requests
import json
from flask import Flask

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
    url = f"https://newsapi.org/v2/everything?q={topic}&from=2023-06-28&sortBy=publishedAt&apiKey=1fcc74500ce5439abd865dbb5eef9037"
    req = requests.get(url)
    news = json.loads(req.text)
    return news





if __name__ == "__main__":
    app.run(port=8088)    