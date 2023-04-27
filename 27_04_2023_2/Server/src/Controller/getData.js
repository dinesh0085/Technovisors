const db=require("../db_sql/db")
const mysql=require("mysql2")


const getData= async (req,res)=>{
    const sqlQuery=`SELECT * FROM customers`
  db.query(sqlQuery,(err,result)=>{
      if(err){
        res.send({msg:'Data Getting failed',error:err}) 
      }
      res.send({msg:'Data Getting Successfull',result})
  })
}

const getSelectedData= async (req,res)=>{
    let name=req.params.name
    const sqlQuery=`SELECT * FROM customers WHERE name=`+mysql.escape(name)
  db.query(sqlQuery,(err,result)=>{
      if(err){
        res.send({msg:'Data Getting failed',error:err}) 
      }
      res.send({msg:'Data Getting Successfull',result})
  })
}

module.exports={getData , getSelectedData }