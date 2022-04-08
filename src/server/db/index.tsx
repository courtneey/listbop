export const db = require("./db");

const User = require("./models/User");
const Product = require("./models/Product");
const List = require("./models/List");
const List_Product = require("./models/List_Product");

User.hasMany(List);
List.belongsTo(User);

List.hasMany(Product);
Product.belongsToMany(List, { through: List_Product });

export const models = {
  User,
  Product,
  List,
  List_Product,
};
