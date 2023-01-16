const Sequilize = require("sequelize");

const db = require("../configs/db");

const { DataTypes } = require("sequelize");

const ProductModel = db.define('Products', {
    
}, { freezeTableName: true });

module.exports = ProductModel;