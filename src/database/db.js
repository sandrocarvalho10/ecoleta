//importar dependencias do sqlite3

const sqlite3 = require("sqlite3").verbose();

//criar o objeto  que ira fazer operações de banco de dados

const db = new sqlite3.Database("./src/database/database.db")

//utilizar o obejto de banco de Dados para as operações

// db.serialize(() => {
//   // criar tabela
//   db.run(`
//     CREATE TABLE IF NOT EXISTS places (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       image TEXT,
//       name TEXT,
//       address TEXT,
//       address2 TEXT,
//       state TEXT,
//       city TEXT,
//       items TEXT
//     );
//   `)

//   // 2 Insrir daddos na Tabela
//   const query = `
//   INSERT INTO places (
//     image,
//     name,
//     address,
//     address2,
//     state,
//     city,
//     items
//   ) VALUES (?,?,?,?,?,?,?)
// `;

//   const values = [
//     "https://images.unsplash.com/photo-1481761289552-381112059e05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=861&q=80",
//     "Papersider",
//     "Guilherme Ganmballa, Jardim América",
//     "Número 260",
//     "Santa Catarina",
//     "Rio do Sul",
//     "Resíduos Eletrônicos, Lampadas"
//   ];

//   function afterInsertData(err) {
//     if (err) {
//       return console.log(err)
//     }

//     console.log("Cadastrado com sucesso")
//     console.log(this)
//   }

//   db.run(query, values, afterInsertData)


//   // 3 Consultar dados na Tabela
//   // db.all(`SELECT name FROM places`, function(err, rows){
//   //   if(err){
//   //     return console.log(err);
//   //   }
//   //   console.log(rows);
//   // })

  // 4 Deletar um dado na Tabela
  // db.run(`DELETE FROM places WHERE id= ?`, [4], function(err){
  //   if(err){
  //     console.log(err)
  //   }

  //   console.log("Registro deletado com sucesso");
    
  // })

// })

// exportar Banco
module.exports = db