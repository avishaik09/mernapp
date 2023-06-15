require("dotenv").config();
const express = require("express");
const server = express();
const mongoose = require("mongoose");
const cors =require('cors')
const morgan = require("morgan");
const productRouter = require("./routes/product");
const path=require('path');
// const productController=require('./controller/product')
// const productRouter=express.Router()

//db conncetion

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("database connected");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}



console.log("env", process.env.DB_PASSWORD);
server.use(cors())
server.use(express.json()); // as a bodyparser which helps understand browser the json type file
server.use(morgan("combined"));
server.use("/", productRouter.routes);
// server.use(express.static(process.env.PUBLIC_DIR));
server.use(express.static(path.resolve(__dirname,process.env.PUBLIC_DIR)));
server.use('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'build','index.html'))
})
//MVC   model(data or business rules)  view(data show) controller()

// API-ENDPOINt or Server route

//products -->  resource
//API ROOT ,baseURl ,eg- google.com/api/v2/

server.listen(process.env.PORT, () => {
  console.log("server started");
});
