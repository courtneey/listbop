export const db = require("./db");

const User = require("./models/User");
const Product = require("./models/Product");
const List = require("./models/List");

User.hasMany(List);
List.belongsTo(User);

List.hasMany(Product);
Product.belongsToMany(List, { through: "list_products" });

export const models = {
  User,
  Product,
  List,
};
