const express = require("express");
const expressLayouts = require("express-ejs-layouts"); // ---

const app = express();
const port = process.env.PORT || 3000;

const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

app.use(express.urlencoded({ extended: true })); //---
app.use(express.static("public"));

app.use(expressLayouts); //----
app.set("layout", "./layouts/main"); //-----
app.set("view engine", "ejs"); // -----

const router = require("./server/routes/recipeRoute");

app.use("/", router);

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
