// la mia prima prova da zero:
var express = require("express"),
	app = express(),
	favicon = require("express-favicon")

app.use("/static", express.static("static")) // dico al routing che sotto static va gestito tutto come risorse statiche
app.use(favicon(__dirname + "/static/favicon.ico")) // gest particolare del favicon

app.get("/", function(request, response){
	response.end("hello wolrd from / !")
})

app.get("/pippo", function(request, response){
	response.end("hello wolrd from /pippo !")
})

app.listen(8080, "127.0.0.1", function() {
	console.log("server partito!!")
})

