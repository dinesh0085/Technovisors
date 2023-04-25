const express=require('express')
const cors=require("cors")
require("dotenv").config()
const db=require("./db_sql/db")
let editorServer = require('datatables.net-editor-server');
// const mysql2=require("mysql2")

let Editor = editorServer.Editor
let Field = editorServer.Field;
let Validate = editorServer.Validate;
let Format = editorServer.Format;
let Options = editorServer.Options;


// let editor = new Editor( db, 'test_table' );
// const db=mysql2.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"Diya@1432",
//     database:"movie"
// })

const PORT=process.env.PORT;

const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.post('/editor',async (req,res)=>{
    // let {movie_name,movie_type,rating,release_date} = req.body
    // const sqlInsert=`INSERT INTO movie_table (movie_name,movie_type,rating,release_date) VALUES (?,?,?,?)`
    // db.query(sqlInsert,[movie_name,movie_type,rating,release_date],(err,result)=>{
    //     console.log("error",err);
    //     console.log("result",result);
    //     res.send('Hello')
    // })


let editor = new Editor(db, 'movie_table').fields(
    new Field('movie_name').validator(Validate.notEmpty()),
    new Field('movie_type').validator(Validate.notEmpty()),
    new Field('rating').validator(Validate.notEmpty()),
    new Field('release_date').validator(Validate.notEmpty()),
);

await editor.process(req.body);
res.json(editor.data());
 
})


app.listen(PORT,()=>{console.log(`Listening Server on Port Number ${PORT}`)})