const router = require("express").Router();
const {
  models: { List, List_Product },
} = require("../db");
module.exports = router;

router.post("/", async (req, res, next) => {
  try {
    // create a list for this userId
    const newList = await List.create({ userId: req.body.userId });

    // using listId, create entries for each productId in list_products
    const listId = newList.dataValues.id;
    const { products } = req.body;

    products.forEach(async (product) => {
      try {
        await List_Product.create({ productId: product.id, listId });
      } catch (err) {
        console.log(
          "There was an issue with adding this product to the list:",
          err
        );
      }
    });
    res.send("Successfully created list with products.");
  } catch (err) {
    next(err);
  }
});
