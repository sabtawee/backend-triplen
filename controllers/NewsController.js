const NewModel = require("../models/NewsModel");

const getAllNews = async (req, res) => {
  try {
    const news = await NewModel.sequelize.query("SELECT * FROM news");
    res.status(200).json(news[0]);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAllNewsById = async (req, res) => {
  try {
    const id = req.params.id;
    const news = await NewModel.sequelize.query(
      `SELECT * FROM news WHERE id = ${id}`
    );
    res.status(200).json(news[0]);
  } catch (error) {
    res.status(500).json(error);
  }
};

const createNews = async (req, res) => {
  try {
    if (!req.files) {
      res.send({ status: 500 });
    }

    let title = req.body.title;
    let content = req.body.detail;
    let file = req.files.file;
    let fileData = file.data;
    let img = Buffer.from(fileData, "binary").toString("base64");
    try {
      await NewModel.sequelize.query(
        `INSERT INTO news (title, des, img) VALUES ('${title}', '${content}', '${img}')`
      );
      res.send({ status: 200 });
      console.log(`News added successfully`);
    } catch (error) {
      console.log({ message: error.message });
      res.status(500).json(error);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateNews = async (req, res) => {
  try {
    if (!req.files) {
      const id = req.params.id;
      let title = req.body.title;
      let content = req.body.detail;
      try {
        await NewModel.sequelize.query(
          `UPDATE news SET title = '${title}', des = '${content}' WHERE id = ${id}`
        );
        res.send({ status: 200 });
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      const id = req.params.id;
      let title = req.body.title;
      let content = req.body.detail;
      let file = req.files.file;
      let fileData = file.data;
      let img = Buffer.from(fileData, "binary").toString("base64");
      try {
        await NewModel.sequelize.query(
          `UPDATE news SET title = '${title}', des = '${content}', img = '${img}' WHERE id = ${id}`
        );
        res.send({ status: 200 });
      } catch (error) {
        res.status(500).json(error);
      }
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteNews = async (req, res) => {
  try {
    const id = req.params.id;
    try {
      await NewModel.sequelize.query(`DELETE FROM news WHERE id = ${id}`);
      res.send({ status: 200 });
    } catch (error) {
      res.status(500).json(error);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getAllNews,
  createNews,
  updateNews,
  deleteNews,
  getAllNewsById,
};
