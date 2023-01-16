const Sequelize = require("sequelize");

const db = new Sequelize("cms", "root", "", {
  host: "localhost",
  dialect: "mysql",
  // define: {
  //   timestamps: false,
  // },
});

module.exports = db;
