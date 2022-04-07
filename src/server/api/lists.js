const router = require("express").Router();
const {
  models: { List },
} = require("../db");
module.exports = router;

router.post("/", async (req, res, next) => {
  try {
    // create a list for this userId
    const newList = await List.create({ userId: req.body.userId });

    // using listId, create entries for each productId in list_products
  } catch (err) {
    next(err);
  }
});
