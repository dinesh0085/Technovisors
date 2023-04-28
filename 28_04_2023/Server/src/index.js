const express=require('express')
require("dotenv").config()
const cors=require("cors")
const productRoute=require("./Route/product.route")

const PORT=process.env.PORT
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
  res.send('Hello')
})
app.use("/product",productRoute)

app.listen(PORT,()=>{ console.log(`Listening Server at PORT ${PORT}`)})