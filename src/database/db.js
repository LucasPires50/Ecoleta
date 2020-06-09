//importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

//iniciar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

//exportadno para o server.js fazer o acesso 
module.exports = db

//utilizar o objeto de banco de dados, para nossas operações
db.serialize(() => {
    /*//Criar uma tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS bancos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,  
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)

    //Inserir dados na tabela
    const query = `
    INSERT INTO bancos (
        image,
        name, 
        address,
        address2,
        state,
        city,
        items
    ) VALUES (?,?,?,?,?,?,?)
    `
    const values = [
        "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=801&q=80",
        "Colectoria",
        "Guilherme Gemballa, Jardim América",
        "Número 260",
        "Santa Catarina",
        "Rio do Sul",
        "Resíduos Eletrícos, Lâmpadas"
    ]

    function afterInsertData(err) {
        if(err) {
            return console.log(err)
        }
        console.log("Cadastrado com sucesso")
        console.log(this)
    }

    db.run(query, values, afterInsertData)

    //Consultar os dados na tabela
    db.all(`SELECT * FROM bancos`, function(err, rows) {
        if(err){
            return console.log(err)
        }
        console.log("Aqui estão seus registros: ")
        console.log(rows)
    })*/

    //Deletar um dado na table

    //db.run(`DELETE FROM bancos`)
}) 