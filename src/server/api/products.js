const router = require("express").Router();
const {
  models: { Product },
} = require("../db");
module.exports = router;
const axios = require("axios");

const { API_BASE_URL } = require("../../secret");

router.get("/:name", async (req, res, next) => {
  const titleName = `${req.params.name[0].toUpperCase()}${req.params.name
    .slice(1)
    .toLowerCase()}`;
  try {
    const product = await Product.findOne({
      where: {
        name: titleName,
      },
    });

    if (!product) {
      // if this product doesn't already exist, search Kroger API
      const krogerToken =
        "eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vYXBpLWNlLmtyb2dlci5jb20vdjEvLndlbGwta25vd24vandrcy5qc29uIiwia2lkIjoidnl6bG52Y3dSUUZyRzZkWDBzU1pEQT09IiwidHlwIjoiSldUIn0.eyJhdWQiOiJsaXN0Ym9wLTZmODg3OWZiNmZhMDVlM2U2ZGMxNjJiYjRjYzVlNjg3NjU0MjEwMDQ1MDg5MzA4NzA3MyIsImV4cCI6MTY0NjQ0MjI0MiwiaWF0IjoxNjQ2NDQwNDM3LCJpc3MiOiJhcGktY2Uua3JvZ2VyLmNvbSIsInN1YiI6IjcwYjM3MjI3LTdjYTctNWI2NC1iMzgwLTFjMGYzYjYzMTdhYyIsInNjb3BlIjoicHJvZHVjdC5jb21wYWN0IiwiYXV0aEF0IjoxNjQ2NDQwNDQyODc3MDIwNTQyLCJhenAiOiJsaXN0Ym9wLTZmODg3OWZiNmZhMDVlM2U2ZGMxNjJiYjRjYzVlNjg3NjU0MjEwMDQ1MDg5MzA4NzA3MyJ9.Tk6uMGdn7AOAcaR-aQu1CTEVyr6j9hIitzzbC70i_-W9voq4LFqAfcMCyibY9yeZs0ratK_VcVcB0NMhVzGy28AKnVL6WRqlGOjuOXcAchlL4eCBaQs3F4bGDYdF2qWvT4zv3iilDVSgMTbwE6o9_GDx8jxgRjGHTiwA001srQlfDBBa-OQ8tASDukD3I6HOIvMrm6GnRdQxTxFmr_S6906zTZ2-Zih-449Ex7fha_XHJrZBziE49FCPh628bj_c6ptEcM266Og2HM17w20qrwx-BlY0HGBf4CYr2m48Zfuu3vRBojfqRpql7Z4mh8_U15MdI9Y6uCg9p0zyr5cWQQ";

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
