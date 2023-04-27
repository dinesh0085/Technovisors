const express=require("express");
const { getData, getSelectedData } = require("../Controller/getData");
const createData = require("../Controller/createData");
const updateData = require("../Controller/updateData");
const deleteData = require("../Controller/deleteData");



const app=express.Router();

// Get All Data
app.get("/",getData)

// Get Selected Data using query
app.get("/:name",getSelectedData)

// Create Data and add to database
app.post("/create",createData)

// Update Data
app.put("/update/:id",updateData)

// Delete Data
app.delete("/delete/:id",deleteData)


module.exports=app