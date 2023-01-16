const ProductModel = require("../models/ProductModel");
const fs = require("fs");
const axios = require("axios");

const getAllProducts = async (req, res) => {
  
  try {
    const products = await ProductModel.sequelize.query(
      `SELECT * FROM Products`
    ); 
    res.json(products[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};


const addProduct = async (req, res) => {
    try {
        if (!req.files) {
            res.send({ status: 500 });
          }
          let sku = req.body.sku
          let barcode_ibc = req.body.barcode_ibc
          let barcode = req.body.barcode
          let type = req.body.type
          let store_size = req.body.store_size
          let product_name = req.body.product_name
          let product_color = req.body.product_color
          let product_size = req.body.product_size
          let product_price = req.body.product_price
          let product_detail = req.body.product_detail
          let file = req.files.file;
          let fileData = file.data;
          let img = Buffer.from(fileData, "binary").toString("base64");
          // let img = Buffer.from(fileData, "binary").toString("base64");
          const buffer = Buffer.from(fileData);
          const blob = new Blob([buffer], { type: "image/png" });
          console.log(blob)
          // console.log(buffer)
          try {
            await ProductModel.sequelize.query(
              `INSERT INTO products (sku, barcode_ibc, barcode, type, store_size, product_name, product_color, product_size, product_price, product_detail, product_img) 
              VALUES ('${sku}', '${barcode_ibc}', '${barcode}', '${type}', '${store_size}', '${product_name}', '${product_color}', '${product_size}', '${product_price}', '${product_detail}', '${img}');`
            );
            console.log("Product added successfully")
            // res.send({ status: 200 });
          } catch (error) {
            console.log(error.message)
          }
    } catch (error) {
        res.json({ message: error.message });
    }
}
module.exports = { getAllProducts, addProduct }
