const express = require("express");
const expressLayouts = require("express-ejs-layouts"); // ---

const app = express();

const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

app.use(express.urlencoded({ extended: true })); //---
app.use(express.static("public"));

app.use(expressLayouts); //----
app.set("layout", "./layouts/main"); //-----
app.set("view engine", "ejs"); // -----

const router = require("./server/routes/recipeRoute");

app.use("/", router);

app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`);
});
