const PORT = 8080;
const app = require("./app");

const init = async () => {
  try {
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
  } catch (err) {
    console.log(`There was an issue at port ${PORT}`, err);
  }
};

init();
