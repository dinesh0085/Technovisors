const db=require("../db_sql/db")
const mysql=require("mysql2")

const updateData=async (req,res)=>{
    const id=req.params.id
    db.connect(function(err) {
        if (err) throw err;
        var sql = `UPDATE customers SET name = 'Dinesh' WHERE id =`+ mysql.escape(id);
        db.query(sql, function (err, result) {
          if (err){
            res.send({msg:'Data Updating failed',result}) 
          }
          res.send({msg:'Data Updating sucessfull',result})
        });
      });
}

module.exports=updateData