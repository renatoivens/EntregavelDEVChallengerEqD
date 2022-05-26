const express = require("express");
const { arrayBuffer } = require("stream/consumers");
const app = express();

var articles = [
    {
        "id": 1,
        "featured": false,
        "title": "string",
        "url": "string",
        "imageUrl": "string",
        "newsSite": "string",
        "summary": "string",
        "publishedAt": "string"
      }    
]

var idCounter = 1;

app.use(express.json());

app.get("/", (req,res) => {
    res.status(200).send("Back-end Challenge 2021 🏅 - Space Flight News");
})

app.get("/articles", (req, res) => {
    res.status(200).json(articles);
})

app.get("/articles/:id" , (req, res) =>{
    const article = articles.find((article) => article.id == req.params.id)
    res.status(200).json(article);
})

app.post("/articles", (req, res) => {
    const newArticle = req.body;
    idCounter += 1;
    newArticle.id = idCounter;
    articles.push(newArticle);

    res.status(200).send("Created With Success");
})

app.put("/articles/:id", (req, res) => {
    const article = articles.find((article) => article.id == req.params.id)
    const index = articles.indexOf(article);

    articles[index] = req.body;
    res.status(200).send("Update With Success");
})

app.delete("/articles/:id", (req, res) => {
    const article = articles.find((article) => article.id == req.params.id)
    const index = articles.indexOf(article);
    articles.splice(index, 1);
    res.status(200).send("Delete With Success");
})

app.listen(3000, () =>{
    console.log("Teste")
})