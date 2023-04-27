const db=require("../db_sql/db")
const mysql=require("mysql2")

const deleteData=async(req,res)=>{
    const id=req.params.id
    db.connect(function(err) {
        if (err){
            res.send({msg:"Something went wrong"})
        } 
        var sql = "DELETE FROM customers WHERE id ="+mysql.escape(id);
        db.query(sql, function (err, result) {
          if (err) {
            res.send({msg:"Data deletion failed"})
          }
         res.send({msg:"Data deleted successfull"})
        });
      });
}

module.exports=deleteData