//importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

//iniciar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

//utilizar o objeto de banco de dados para nossas operações
db.serialize(() => {
    //criar uma tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT, 
            name TEXT,
            address TEXT,
            ADDRESS2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)

    //Inseri dados da tabela
    const query = `
        INSERT INTO places (
            image, 
            name,
            address,
            ADDRESS2,
            state,
            city,
            items 
        ) VALUES (
            ?,?,?,?,?,?,?
        );
    `
    const values = [
        "https://images.unsplash.com/photo-1565204265082-49ca193ed380?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80",
        "Colectoria",
        "Guilherme Gemballa, Jardim América",
        "Nº 260",
        "Santa Catarina",
        "Rio do Sul",
        "Resíduos Eletônicos"
    ]

    function afterInsertData(err){
        if(err){
            return console.log(err)
        }
        console.log("Cadastrado com sucesso")
        console.log(this)
    }

    db.run(query, values, afterInsertData)

        // Deletar um dado da tabela

        /*db.run(`DELETE FROM places WHERE id = ?`, [1], function(err){
            if(err){
                return console.log(err)
            }
            console.log("Registo deletado com sucesso!")
        })*/

    //Consultar os dados na tabela
    db.all(`SELECT * FROM places`, function(err, rows) {
        if(err){
            return console.log(err)
        }

        console.log("Aqui estão os seus registros")
        console.log(rows)
    })

})