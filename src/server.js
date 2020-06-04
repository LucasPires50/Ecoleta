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
    res.sendFile(__dirname + "/views/index.html")
})
server.get("/ceate-point", (req, res) => {
    res.sendFile(__dirname + "/views/ceate-point.html")
})

//ligar o servidor
server.listen(3000)