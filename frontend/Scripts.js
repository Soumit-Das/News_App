// variables
const formulaOneBtn = document.getElementById("FormulaOne");
const WECBtn = document.getElementById("WEC");
const sportsBtn = document.getElementById("sport");
const entertainmentBtn = document.getElementById("entertainment");
const technologyBtn = document.getElementById("technology");
const searchBtn = document.getElementById("searchBtn");
const RallyBtn = document.getElementById("Rally");
const IndiaBtn = document.getElementById("India");

const newsQuery = document.getElementById("newsQuery");
const newsType = document.getElementById("newsType");
const newsdetails = document.getElementById("newsdetails");

// Array
var newsDataArr = [];
var topic;


window.onload = function(event) {
    event.preventDefault();
    newsType.innerHTML = "<h4>World news</h4>";
    topic = "sport"
    news()
};

formulaOneBtn.addEventListener("click", function(event) {
    event.preventDefault();
    newsType.innerHTML = "<h4>Formula 1</h4>";
    topic = "F1"
    news()
});

WECBtn.addEventListener("click", function(event) {
    event.preventDefault();
    newsType.innerHTML = "<h4>WEC - Sportscars</h4>";
    topic = "WEC-Sportscars"
    news()
});

sportsBtn.addEventListener("click", function(event) {
    event.preventDefault();
    newsType.innerHTML = "<h4>Sports</h4>";
    topic = "Sports"
    news()
});

entertainmentBtn.addEventListener("click", function(event) {
    event.preventDefault();
    newsType.innerHTML = "<h4>Entertainment</h4>";
    topic = "Sports"
    news()
});

technologyBtn.addEventListener("click", function(event) {
    event.preventDefault();
    newsType.innerHTML = "<h4>Technology</h4>";
    topic = "Technology"
    news()
});
RallyBtn.addEventListener("click", function(event) {
    event.preventDefault();
    newsType.innerHTML = "<h4>Rally</h4>";
    topic = "Rally"
    news()
});
IndiaBtn.addEventListener("click", function(event) {
    event.preventDefault();
    newsType.innerHTML = "<h4>Indian news</h4>";
    topic = "India"
    news()
});

searchBtn.addEventListener("click", function(event) {
    event.preventDefault();
    newsType.innerHTML = "<h4>Search : " + newsQuery.value + "</h4>";
    topic = newsQuery.value
    news()
});




function news() {
    // fetch(`https://newsapi.org/v2/everything?q=${topic}&sortBy=publishedAt&apiKey=1fcc74500ce5439abd865dbb5eef9037`)
    fetch("http://localhost:8088/news/"+topic)
      .then(response => response.json())
      .then(data => {
        newsDataArr = data.articles
        console.log(newsDataArr)
        displayNews()
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
  function displayNews() {
    newsdetails.innerHTML = "";
    newsDataArr.forEach(news => {
      var date = news.publishedAt.split("T");
      var col = document.createElement('div');
      col.className = "col-sm-12 col-md-4 col-lg-3 p-2 card";
      var card = document.createElement('div');
      card.className = "p-2";
      var image = document.createElement('img');
      image.setAttribute("height", "matchparent");
      image.setAttribute("width", "100%");
      image.src = news.urlToImage;
      var cardBody = document.createElement('div');
      var newsHeading = document.createElement('h5');
      newsHeading.className = "card-title";
      newsHeading.innerHTML = news.title;
      var dateHeading = document.createElement('h6');
      dateHeading.className = "text-primary";
      dateHeading.innerHTML = date[0];
      var discription = document.createElement('p');
      discription.className = "text-muted";
      discription.innerHTML = news.description;
      var link = document.createElement('a');
      link.className = "btn btn-dark";
      link.setAttribute("target", "_blank");
      link.href = news.url;
      link.innerHTML = "Read more";
      cardBody.appendChild(newsHeading);
      cardBody.appendChild(dateHeading);
      cardBody.appendChild(discription);
      cardBody.appendChild(link);
      card.appendChild(image);
      card.appendChild(cardBody);
      col.appendChild(card);
      newsdetails.appendChild(col);
    });
  }