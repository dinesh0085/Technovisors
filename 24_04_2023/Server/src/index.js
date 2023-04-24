const express=require('express')
const connect=require("./mongoDB_database/dbConnect")
const userRoute=require("./routes/user.route")
const cors=require("cors")
const mysql2=require("mysql2")
require("dotenv").config()
const db=require("./db_sql/db")
let editorServer = require('datatables.net-editor-server');

let Editor = editorServer.Editor
let Field = editorServer.Field;
let Validate = editorServer.Validate;
let Format = editorServer.Format;
let Options = editorServer.Options;

let editor = new Editor( db, 'test_table' );
// const db=mysql2.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"Diya@1432",
//     database:"test_table"
// })

const PORT=process.env.PORT;

const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.post('/editor',async (req,res)=>{
    // const sqlInsert="INSERT INTO new_table (first_name,last_name) VALUES ('john@gmail.com','1111111111')"
    // db.query(sqlInsert,(err,result)=>{
    //     console.log("error",err);
    //     console.log("result",result);
    //     res.send('Hello')
    // })


let editor = new Editor(db, 'new_table').fields(
    new Field('first_name').validator(Validate.notEmpty()),
    new Field('last_name').validator(Validate.notEmpty()),
);

await editor.process(req.body);
res.json(editor.data());
 
})
// app.use("/user",userRoute)

app.listen(PORT,()=>{console.log(`Listening Server on Port Number ${PORT}`)})