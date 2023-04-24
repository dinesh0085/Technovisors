const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    }
},{timestamps:true,versionKey:false});



const userModel=mongoose.model("user",userSchema);

module.exports=userModel