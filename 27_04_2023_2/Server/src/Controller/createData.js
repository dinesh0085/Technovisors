const db=require("../db_sql/db")
const mysql=require("mysql2")

const createData=async (req,res)=>{
    const {name,address,gender}=req.body
   const values=[name,address,gender]

    const sqlQuery= "INSERT INTO customers (name, address, gender) VALUES (?,?,?)";
  
    db.query(sqlQuery,values,(err,result,fields)=>{
      if(err){
        res.send({msg:'New Data Adding failed',err})
      }
      console.log("Data added successfully");
       res.send({msg:'New Data Added Successfully'})
  })
}

module.exports=createData