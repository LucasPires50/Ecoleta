const express = require("express")
const server = express()

//Configurar pasta publica
server.use(express.static("public"))


//Utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

//Configurar caminhos da aplicação
//pagina inicial
//req -requisição
//res -resposta
server.get("/", (req, res) => {
    return res.render("index.html")
})
server.get("/ceate-point", (req, res) => {
    return res.render("ceate-point.html")
})
server.get("/search", (req, res) => {
    return res.render("search-results.html")
})

//ligar o servidor
server.listen(3000)