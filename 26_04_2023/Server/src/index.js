const express = require("express");
const cors = require("cors");
require("dotenv").config();
const costemer_data=require("../../Data_json/data.json")
// const db=require("./db_sql/db")
// let editorServer = require('datatables.net-editor-server');
const mysql2 = require("mysql2");

// let editor = new Editor( db, 'test_table' );

const db = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "Diya@1432",
  database: "mydb",
});

const PORT = process.env.PORT;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/editor", async (req, res) => {
  // Get All Data from SQL Table
  // const sqlQuery=`SELECT * FROM staff`
  // db.query(sqlInsert,(err,result)=>{
  //     console.log("error",err);
  //     console.log("result",result);
  //     res.send({msg:'Hello',result})
  // })

  // Get Selected Columns from SQL Table

  // const sqlQuery=`SELECT first_name FROM staff`
  // db.query(sqlQuery,(err,result,fields)=>{
  //     if(err){
  //         console.log("error",err);
  //     }
  //     console.log("fields",fields);
  //     res.send({msg:'Hello',result})
  // })

  // Create Database in mySQL
  // const sqlQuery=`CREATE DATABASE myDB`
  // db.query(sqlQuery,(err,result,fields)=>{
  //     if(err){
  //         console.log("error",err);
  //     }
  //     console.log("Database created");
  //     res.send({msg:'Hello',result})
  // })

  // Create Table inside Database in mySQL
  //  const sqlQuery=`CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))`
  //  db.query(sqlQuery,(err,result,fields)=>{
  //      if(err){
  //          console.log("error",err);
  //      }
  //      console.log("Table created in mydb database");
  //      res.send({msg:'Hello',result})
  //  })

  // Add new column to existing table
  //   const sqlQuery=`ALTER TABLE customers ADD COLUMN gender VARCHAR(255)`
  //   db.query(sqlQuery,(err,result,fields)=>{
  //       if(err){
  //           console.log("error",err);
  //       }
  //       console.log("Table altered in mydb database");
  //       res.send({msg:'Hello',result})
  //   })

  // Insert single row into table
  // const sqlQuery= "INSERT INTO customers (name, address, gender) VALUES ('Company Inc', 'Highway 37','Male')";
  // db.query(sqlQuery,(err,result,fields)=>{
  //     if(err){
  //         console.log("error",err);
  //     }
  //     console.log("Data added successfully");
  //     res.send({msg:'Hello',result})
  // })

  // Insert Multiple row into table




//   const sqlQuery= "INSERT INTO customers (name, address, gender) VALUES ?";
//   const data=[
//       ['Pankaj','Deesa','Male'],
//       ['Jalpa','Deesa','Female'],
//       ['Nirav','Deesa','MAle'],
//       ['Anil','Deesa','MAle'],
//   ]
//   db.query(sqlQuery,[data],(err,result,fields)=>{
//       if(err){
//           console.log("error",err);
//       }
//       console.log("Data added successfully");
//       res.send({msg:'Hello',result})
//   })

  // Get filtered value from table
  //   const sqlQuery= "SELECT * FROM customers WHERE name='Pankaj'";

  //   db.query(sqlQuery,(err,result,fields)=>{
  //       if(err){
  //           console.log("error",err);
  //       }
  //       console.log("Data Getting successfully");
  //       res.send({msg:'Hello',result})
  //   })

  //   Select records where the name starts with the letter 'A':

  // const sqlQuery= "SELECT * FROM customers WHERE name LIKE 'A%'";

  // db.query(sqlQuery,(err,result,fields)=>{
  //     if(err){
  //         console.log("error",err);
  //     }
  //     console.log("Data Getting successfully");
  //     res.send({msg:'Hello',result})
  // })

  //   Select records where the name end with the letter 'A':

  //  const sqlQuery= "SELECT * FROM customers WHERE name LIKE '%A'";

  //  db.query(sqlQuery,(err,result,fields)=>{
  //      if(err){
  //          console.log("error",err);
  //      }
  //      console.log("Data Getting successfully");
  //      res.send({msg:'Hello',result})
  //  })

  //   Select records where the name include the letter 'A':

//   const sqlQuery = "SELECT * FROM customers WHERE name LIKE '%A%'";

//   db.query(sqlQuery, (err, result, fields) => {
//     if (err) {
//       console.log("error", err);
//     }
//     console.log("Data Getting successfully");
//     res.send({ msg: "Hello", result });
//   });


//   Select records where the name is Pankaj but using our variable:

// const Name='Pankaj'

// const sqlQuery = "SELECT * FROM customers WHERE name ="+mysql2.escape(Name);

// db.query(sqlQuery, (err, result, fields) => {
//   if (err) {
//     console.log("error", err);
//   }
//   console.log("Data Getting successfully");
//   res.send({ msg: "Hello", result });
// });

  // let editor = new Editor(db, 'movie_table').fields(
  //     new Field('movie_name').validator(Validate.notEmpty()),
  //     new Field('movie_type').validator(Validate.notEmpty()),
  //     new Field('rating').validator(Validate.notEmpty()),
  //     new Field('release_date').validator(Validate.notEmpty()),
  // );

  // await editor.process(req.body);
  // res.json(editor.data());

  
//   Adding Assignment 1 Data in to SQL database------------


//   let main_data=[]
// function formatDataForErrorSolving(data){
    
//     data.map((res)=>{
//         if(res.Name!==undefined){
//             main_data.push(res)
//         }
//     })
    
   
// }

// formatDataForErrorSolving(costemer_data)


//   let data_arr=[];

// function jsonToArray(json_data){
//    json_data.map((res)=>{
//     let arr=[]
//     for(let i in res){
//         if(i==="Internal_ID"){
//             continue
//         }
//         arr.push(res[i])
//     }
//     data_arr.push(arr)
//    })
// }

// jsonToArray(main_data)




//   const sqlQuery= "INSERT INTO new_table (Date,Invoice_Credit_Note,Name,Region_SI,Country,Brand,Category,Amount) VALUES ?";
 
//   db.query(sqlQuery,[data_arr],(err,result,fields)=>{
//       if(err){
//           console.log("error",err);
//       }
//       console.log("Data added successfully");
//       res.send({msg:'Hello',result})
//   })


});

app.listen(PORT, () => {
  console.log(`Listening Server on Port Number ${PORT}`);
});
