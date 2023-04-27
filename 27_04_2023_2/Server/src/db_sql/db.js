const mysql2 = require("mysql2");


const db = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "Diya@1432",
    database: "mydb",
  });

  module.exports=db
