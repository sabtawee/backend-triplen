const LogoModel = require("../models/LogoModel");

const getLogo = async (req, res) => {
  try {
    const logo = await LogoModel.sequelize.query("SELECT * FROM logos");
    res.status(200).json(logo[0]);
  } catch (error) {
    res.status(500).json(error);
  }
};

const createLogo = async (req, res) => {
  try {
    if (!req.files) {
      res.send({ status: 500 });
    }
    let name = req.body.name;
    let filename = req.body.fileName;
    let type = req.body.type;
    let file = req.files.file;
    let fileData = file.data;
    let img = Buffer.from(fileData, "binary").toString("base64");
    try {
      await LogoModel.sequelize.query(
        `INSERT INTO logos (name, filename, type, img) VALUES ('${name}', '${filename}', '${type}', '${img}');`
      );
      res.send({ status: 200, message: "Logo added successfully" });
      console.log("Logo added successfully");
    } catch (error) {
      console.log({ message: error.message });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};

const deleteLogo = async (req, res) => {
  try {
    const id = req.params.id;
    try {
      await LogoModel.sequelize.query(`DELETE FROM logos WHERE id = ${id}`);
      res.send({ status: 200, message: "Logo deleted successfully" });
      console.log("Logo deleted successfully");
    } catch (error) {
      console.log({ message: error.message });
    }
  } catch (error) {
    console.log({ message: error.message });
  }
};

const updateLogo = async (req, res) => {
  try {
    if (!req.files) {
      res.send({ status: 500 });
    }
    const id = req.params.id;
    let name = req.body.name;
    let filename = req.body.filename;
    let file = req.files.file;
    let fileData = file.data;
    let img = Buffer.from(fileData, "binary").toString("base64");
    try {
      await LogoModel.sequelize.query(
        `UPDATE logos SET name = '${name}', filename = '${filename}', img = '${img}' WHERE id = ${id}`
      );
      res.send({ status: 200, message: "Logo updated successfully" });
      console.log("Logo updated successfully");
    } catch (error) {
      console.log({ message: error.message });
    }
  } catch (error) {
    console.log({ message: error.message });
  }
};

module.exports = {
  getLogo,
  createLogo,
  deleteLogo,
  updateLogo,
};
