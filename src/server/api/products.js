const router = require("express").Router();
const {
  models: { Product },
} = require("../db");
module.exports = router;
const axios = require("axios");

const { API_BASE_URL } = require("../../secret");

router.get("/:name", async (req, res, next) => {
  const titleName = req.params.name
    .split(" ")
    .map((text) => `${text[0].toUpperCase()}${text.slice(1).toLowerCase()}`)
    .join(" ");
  try {
    const product = await Product.findOne({
      where: {
        name: titleName,
      },
    });

    if (!product) {
      // if this product doesn't already exist, search Kroger API
      const krogerToken = req.headers.authorization;

      const { data: krogerData } = await axios.get(
        `${API_BASE_URL}/v1/products`,
        {
          params: {
            "filter.term": req.params.name.toLowerCase(),
            "filter.limit": 1,
          },
          headers: {
            Authorization: `Bearer ${krogerToken}`,
            "Cache-Control": "no-cache",
          },
        }
      );

      const productInfo = krogerData.data[0];
      const productCategory = productInfo.categories[0];
      const { productId } = productInfo;

      // create a new entry in db
      const newProductEntry = await Product.create({
        name: titleName,
        category: productCategory,
        productId,
      });

      // send new product entry
      res.send(newProductEntry);
    } else {
      res.send(product);
    }
  } catch (err) {
    next(err);
  }
});
