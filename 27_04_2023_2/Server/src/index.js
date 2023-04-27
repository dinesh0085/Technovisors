const express = require("express");
const cors = require("cors");
require("dotenv").config();
const userRoute=require("./routes/user.route")



const PORT = process.env.PORT;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
   res.send("CRUD Using Node.js and MySQL")
});

app.use("/user",userRoute)



app.listen(PORT, () => {
  console.log(`Listening Server on Port Number ${PORT}`);
});
