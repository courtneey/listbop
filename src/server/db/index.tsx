export const db = require("./db");

const User = require("./models/User");
const Product = require("./models/Product");
const List = require("./models/List");

User.hasMany(List);
List.belongsTo(User);

export const models = {
  User,
  Product,
  List,
};
