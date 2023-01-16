const CategoryModel = require("../models/CategoryModel");

const getAllCategories = async (req, res) => {
  try {
    const categories = await CategoryModel.sequelize.query(
      "SELECT * FROM categories"
    );
    res.status(200).json(categories[0]);
  } catch (error) {
    res.status(500).json(error);
  }
}

const getAllCategoriesById = async (req, res) => {
    try {
        const id = req.params.id;
        const categories = await CategoryModel.sequelize.query(
        `SELECT * FROM categories WHERE id = ${id}`
        );
        res.status(200).json(categories[0]);
    } catch (error) {
        res.status(500).json(error);
    }
}

const createCategory = async (req, res) => {
    try {
        let name = req.body.name;
        let des = req.body.des;
        try {
            await CategoryModel.sequelize.query(
            `INSERT INTO categories (name, des) VALUES ('${name}', '${des}')`
            );
            res.send({ status: 200 });
            console.log(`Category added successfully`);
        } catch (error) {
            console.log({ message: error.message });
            res.status(500).json(error);
        }
    } catch (error) {
        res.status(500).json(error);
    }
}


const updateCategory = async (req, res) => {
    try {
        const id = req.params.id;
        let name = req.body.name;
        let des = req.body.des;
        try {
            await CategoryModel.sequelize.query(
            `UPDATE categories SET name = '${name}', des = '${des}' WHERE id = ${id}`
            );
            res.send({ status: 200 });
            console.log(`Category updated successfully`);
        } catch (error) {
            console.log({ message: error.message });
            res.status(500).json(error);
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

const deleteCategory = async (req, res) => {
    try {
        const id = req.params.id;
        try {
            await CategoryModel.sequelize.query(
            `DELETE FROM categories WHERE id = ${id}`
            );
            res.send({ status: 200 });
            console.log(`Category deleted successfully`);
        } catch (error) {
            console.log({ message: error.message });
            res.status(500).json(error);
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {
    getAllCategories,
    getAllCategoriesById,
    createCategory,
    updateCategory,
    deleteCategory
}
