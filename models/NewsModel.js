const db = require("../configs/db");
const { DataTypes } = require("sequelize");

const NewModel = db.define("news", {}, { freezeTableName: true });

module.exports = NewModel;
