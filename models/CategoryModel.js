const db = require("../configs/db");

const { DataTypes } = require("sequelize");

const CategoryModel = db.define('categories', {}, { freezeTableName: true });

module.exports = CategoryModel;