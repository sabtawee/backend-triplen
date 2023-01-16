const Sequilize = require("sequelize");

const db = require("../configs/db");

const { DataTypes } = require("sequelize");

const UserModel = db.define(
  "Users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    emp_id: {
      type: DataTypes.STRING,
    },
    department_code: {
      type: DataTypes.STRING,
    },
    department: {
      type: DataTypes.STRING,
    },
    name_th: {
      type: DataTypes.STRING,
    },
    surname_th: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    surname: {
      type: DataTypes.STRING,
    },
    position: {
      type: DataTypes.STRING,
    },
    div_code: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.STRING,
    }
  },
  {
    freezeTableName: true,
  }
);

module.exports = UserModel;

