const express = require('express');
const productController=require('../controller/product')
const router=express.Router();

router
.post("/products", productController.createProduct) //create POST  /products
.get("/products", productController.getAllProducts) //Read GET /products
.get("/products/:id", productController.getProductById) //read one item /products/:id
.put("/products/:id", productController.replaceProduct) //update put /products/:id
.patch("/products/:id", productController.updateProduct) //update patch /products/:id
.delete("/products/:id", productController.deleteProduct) //delete DELETE   /products/:id


exports.routes=router;