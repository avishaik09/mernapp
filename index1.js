// const lib=require("./lib.js")   --> Common js module

// console.log(lib.sum(4,5),lib.diff(3,6));

//Es module
// import {sum,diff} from "./lib.js"

// console.log(sum(4,5),diff(3,6));

// es5 module import
// const t1=performance.now();
// const fs=require("fs");
// import {readFileSync,readFile} from "node:fs"
// const txt=readFileSync("demo.txt",'utf-8');
// const txt1=readFile("demo.txt",'utf-8',(err,txt1)=>{
//     console.log(txt1);

// });

// console.log(txt);

// const t2=performance.now();
// console.log(t2-t1);

// const express = require('express');

// console.log("hello world");
// const server=express();
// server.listen(8080);

// const fs = require("fs");
// const index = fs.readFileSync("index.html", "utf-8");
// const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
// const products = data.products;

// const http = require("http");
// const data1 = { age: 5 };
// const server = http.createServer((req, res) => {
//   console.log(req.url);

//   if (req.url.startsWith("/product")) {
//     console.log(req.url.split("/"));
//     const id = req.url.split("/")[2];
//     const product = products.find((p) => p.id === +id);
//     console.log(product);
//     res.setHeader('content-Type', 'text/html')
//     let modifiedIndex=index.replace('**title**',product.title)
//     .replace('**rating**',product.rating)
//     .replace('**price**',product.price)
//     .replace('**url**',product.thumbnail)
//     res.end(modifiedIndex);
//     return;

//   }

//   switch (req.url) {
//     case "/":
//       res.setHeader("Content-Type", "text/html");
//       res.end(index);
//       break;
//     case "/api":
//       res.setHeader("content-Type", "application/json");
//       res.end(JSON.stringify(data));
//       break;
//     // case "/product":
//     //   res.setHeader("content-Type", "text/html");
//     //   let modifiedIndex = index
//     //     .replace("**title**", product.title)
//     //     .replace("**rating**", product.rating)
//     //     .replace("**price**", product.price)
//     //     .replace("**url**", product.thumbnail);
//     //   res.end(modifiedIndex);
//     //   break;
//     default:
//       res.writeHead(404, { "Content-Type": "text/plain" });
//       res.end("not found");
//       break;
//   }
//   console.log("Server is runnings");
//   // res.setHeader('Dummy', "Dummy value");
//   // res.setHeader('content-Type', 'text/html')
//   // res.end(data);
// });

// server.listen(8080);

// const fs = require("fs");

// const index = fs.readFileSync("index.html", "utf-8");
// const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
// const product = data.products;

// const express = require("express");

// const server = express();
// server.get("/", (req, res) => {
//   // res.send("<h1>hello</h1>");
//   // res.sendFile('Absolutepath of file')
//   res.json(product);
// });

// server.listen(8080, () => {
//   console.log("server started");
// });

// const http = require("http");
// const server = http.createServer((req, res) => {
//   console.log(req.url);
//   res.setHeader('Content-Type','text/html')
//   console.log("server started");
//   res.end("<h1>Hello</h1>");
// });

// server.listen(8080);

// const fs = require("fs");
// const index = fs.readFileSync("index.html", "utf-8");
// const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
// const products = data.products;

// const express = require("express");
// const server = express();
// const morgan=require('morgan')

//third party middleware
// server.use(morgan('dev'))
// server.use(morgan('combined'))


// inbuilt midldeware 
// server.use(express.json());  // as a bodyparser which helps understand browser the json type file
// server.use(express.urlencoded());
// server.use(express.static('public')); //static hosting







//middleware   Application level
// server.use((req, res, next) => {
//   console.log(
//     req.method,
//     req.ip,
//     req.hostname,
//     new Date(),
//     req.get("USer-Agent")
//   );
//   next();
// });

// const auth = (req, res, next) => {
//     console.log(req.query);

//   if (req.query.password=='123') {
//     next();
//   } else {
//     res.sendStatus(401);
//   }
//   next();
// };

// const auth = (req, res, next) => {
  //   console.log(req.query);

  // if (req.body.password=='123') {
  //   next();
  // } else {
  //   res.sendStatus(401);
  // }
//   next();
// };


//API-ENDPOINt or Server route
// server.get("/product/:id",auth, (req, res) => {
//   console.log(req.params);
//   res.json({ type: "GET" });
// });

// server.post("/", auth,(req, res) => {
//   res.json({ type: "POST" });
// });
// server.put("/", (req, res) => {
//   res.json({ type: "PUT" });
// });
// server.patch("/", (req, res) => {
//   res.json({ type: "PATCH" });
// });
// server.delete("/", (req, res) => {
//   res.json({ type: "DELETE" });
// });

// server.get('/',(req,res)=>{
//     // res.sendStatus(404)
//     res.json(products)
//     // res.status(200).send('<h1>Hello world</h1>')
//     // res.sendFile('Absolute path of the file ')
// })


// server.use(auth);



const fs = require("fs");
const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

const express = require("express");
const server = express();
const morgan=require('morgan')



server.use(express.json());  // as a bodyparser which helps understand browser the json type file


// API-ENDPOINt or Server route


//products -->  resource
//API ROOT ,baseURl ,eg- google.com/api/v2/


//create POST  /products
server.post("/products", (req, res) => {
  console.log(req.body);
  products.push(req.body);
  res.status(201).json(req.body);
});

//Read GET /products
server.get("/products", (req, res) => {
   res.json(products);
});
//read one item
server.get("/products/:id", (req, res) => {
  console.log(req.params.id);
  const id=+req.params.id;
 const product= products.find(p=>p.id===id)
  res.json(product);
});


//update put /products/:id

server.put("/products/:id", (req, res) => {
  const id=+req.params.id;
  const productIndex=products.findIndex(p=>p.id===id);
  products.splice(productIndex,1,{...req.body,id:id})
  res.status(201).json();
});

//update patch /products/:id
server.patch("/products/:id", (req, res) => {
  const id=+req.params.id;
  const productIndex=products.findIndex(p=>p.id===id);
  const product=products[productIndex]
  products.splice(productIndex,1,{...product,...req.body})

  res.status(201).json("data patched");
});

//delete DELETE   /products/:id
server.delete("/products/:id", (req, res) => {
  const id=+req.params.id;
  const productIndex=products.findIndex(p=>p.id===id);
  const product=products[productIndex]
  products.splice(productIndex,1)
  res.json(product);
});


server.listen(8080, () => {
  console.log("server started");
});

