const fs = require("fs");
const mongoose = require("mongoose");
const index = fs.readFileSync("index.html", "utf-8");
// const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
// const products = data.products;
const model = require("../model/product");
const Product = model.Product;

// exports.createProduct = (req, res) => {
//   const product = new Product(req.body);
//   product
//     .save()
//     .then((doc) => {
//       console.log(doc);
//     })
//     .catch((err) => {
//       if (err) {
//         res.status(400).json(err);
//       } else {
//         res.status(201).json(doc);
//       }
//     });
// };

exports.createProduct = async(req, res) => {
 try{ const product = new Product(req.body);
  const doc=await product.save()
  console.log(doc);
  res.status(201).json(doc);
 }catch(err) {
    res.status(400).json(err);
 };
};






// exports.createProduct = (req, res) => {
//     console.log(req.body);
//     products.push(req.body);
//     res.status(201).json(req.body);
//   };

exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

// exports.getAllProducts = (req, res) => {
//    res.json(products);
//  };

exports.getProductById = async (req, res) => {
  console.log(req.params.id);
  const id = req.params.id;
  const product = await Product.findById(id).exec();
  res.json(product);
};

// exports.getProductById = (req, res) => {
//   console.log(req.params.id);
//   const id = +req.params.id;
//   const product = products.find((p) => p.id === id);
//   res.json(product);
// };

exports.replaceProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Product.findOneAndReplace({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).json(doc);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

// exports.replaceProduct = (req, res) => {
//   const id = req.params.id;
//   const productIndex = products.findIndex((p) => p.id === id);
//   products.splice(productIndex, 1, { ...req.body, id: id });
//   res.status(201).json();
// };

exports.updateProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Product.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).json(doc);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

// exports.updateProduct = (req, res) => {
//   const id = req.params.id;
//   const productIndex = products.findIndex((p) => p.id === id);
//   const product = products[productIndex];
//   products.splice(productIndex, 1, { ...product, ...req.body });
//   res.status(201).json("data patched");
// };

exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Product.findOneAndDelete({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).json(doc);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

// exports.deleteProduct = (req, res) => {
//   const id = req.params.id;
//   const productIndex = products.findIndex((p) => p.id === id);
//   const product = products[productIndex];
//   products.splice(productIndex, 1);
//   res.json(product);
// };
