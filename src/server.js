const express = require("express")
const server = express()

//pegar o banco de dados
const db = require("./database/db")

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

    //pegar os dados do banco de dados
    db.all(`SELECT * FROM places`, function(err, rows) {
        if(err){
            return console.log(err)
        }

        const total = rows.length

        console.log("Aqui estão os seus registros")
        console.log(rows)

        //mostar a pagina com os dados do banco de dados
        return res.render("search-results.html", {places: rows, total: total})
    })

})

//ligar o servidor
server.listen(3000)