const express=require("express");
const userModel=require("../model/user.model")
let editorServer = require('datatables.net-editor-server');
const connect = require("../mongoDB_database/dbConnect");




const app=express.Router();


app.get("/", async (req,res)=>{
    
  let editor = new Editor( userModel, 'staff' );
  editor.fields(
      new Field( 'first_name' ),
      new Field( 'last_name' ),
      new Field( 'position' ),
      new Field( 'email' ),
      new Field( 'office' )
  );

await editor.process(req.body);
response.json( editor.data() );
    
})


module.exports=app