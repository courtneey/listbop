const PORT = 8080;
const app = require("./app");
const db = require("./db/db");

const init = async () => {
  try {
    await db.sync();
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
  } catch (err) {
    console.log(`There was an issue at port ${PORT}`, err);
  }
};

init();
