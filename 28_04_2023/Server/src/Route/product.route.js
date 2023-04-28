const express=require('express')
const db=require("../Database/db")
const app = express.Router()
let editorServer = require('datatables.net-editor-server');

let Editor = editorServer.Editor;
let Field = editorServer.Field;
let Validate = editorServer.Validate;
let Format = editorServer.Format;
let Options = editorServer.Options;


app.post('/',async (req,res)=>{
    let editor = new Editor( db, 'product_table' );
    editor.fields(
        new Field( 'name' ),
        new Field( 'type' ),
        new Field( 'color' ),
        new Field( 'price' ),
        new Field( 'discount' )
    );

await editor.process(req.body);
res.send( {message:"Successfull",data:editor._out.data} );
})

module.exports=app