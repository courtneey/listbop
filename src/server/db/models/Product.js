const Sequelize = require("sequelize");
const db = require("../db");

const Product = db.define("product", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  productId: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = Product;
