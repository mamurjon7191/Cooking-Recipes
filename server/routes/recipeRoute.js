const express = require("express");

const recipeController = require("../controller/recipeController");
console.log(recipeController.homePage);

const router = express.Router();

router.route("/").get(recipeController.homePage);

module.exports = router;
