export const db = require("./db");

const User = require("./models/User");
const Product = require("./models/Product");

export const models = {
  User,
  Product,
};
