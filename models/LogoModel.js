const db = require("../configs/db");
const { DataTypes } = require("sequelize");

const LogoModel = db.define('logos', {
    

}, { freezeTableName: true });

module.exports = LogoModel;