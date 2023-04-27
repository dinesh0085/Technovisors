const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db=require("./db_sql/db")
let editorServer = require('datatables.net-editor-server');



let Editor = editorServer.Editor
let Field = editorServer.Field;
let Validate = editorServer.Validate;
let Format = editorServer.Format;
let Options = editorServer.Options;

const PORT = process.env.PORT;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.post("/editor", async (req, res) => {
 console.log(req.body);
  let editor = new Editor(db, 'new_table').fields(
    new Field('id').validator(Validate.notEmpty()),
    new Field('Date').validator(Validate.notEmpty()),
    new Field('Invoice_Credit_Note').validator(Validate.notEmpty()),
    new Field('Name').validator(Validate.notEmpty()),
    new Field('Region_SI').validator(Validate.notEmpty()),
    new Field('Country').validator(Validate.notEmpty()),
    new Field('Brand').validator(Validate.notEmpty()),
    new Field('Category').validator(Validate.notEmpty()),
    new Field('Amount').validator(Validate.notEmpty()),
);

await editor.process(req.body);
res.json(editor.data());
});

app.listen(PORT, () => {
  console.log(`Listening Server on Port Number ${PORT}`);
});
