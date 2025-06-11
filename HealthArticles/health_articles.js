var xhr = new XMLHttpRequest();
var url = "./health_articles.json";

xhr.open("GET", url, true);
xhr.responseType = "json";

xhr.onload = function () {
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById("articles");

    articles.forEach(function (article, i) {
        let articleDiv = document.createElement("div");


        let title = document.createElement("h2");
        title.innerHTML = i + 1 + ". " + article.title;

        let desc = document.createElement("p");
        desc.innerHTML = article.description;

        let waysHeader = document.createElement("h3");
        waysHeader.innerHTML = "Ways to achieve: ";

        let waysList = document.createElement("ul");
        article.ways_to_achieve.forEach(function (way) {
            let i = document.createElement("li");
            i.innerHTML = way;
            waysList.appendChild(i);
        });

        let benefitsHeader = document.createElement("h3");
        benefitsHeader.innerHTML = "Benefits: ";

        let benefitsList = document.createElement("ul");
        article.benefits.forEach(function (benefit) {
            let i = document.createElement("li");
            i.innerHTML = benefit;
            benefitsList.appendChild(i);
        });

        articleDiv.appendChild(title);
        articleDiv.appendChild(desc);
        articleDiv.appendChild(waysHeader);
        articleDiv.appendChild(waysList);
        articleDiv.appendChild(benefitsHeader);
        articleDiv.appendChild(benefitsList);
        articlesDiv.appendChild(articleDiv);

    });
}

xhr.send();