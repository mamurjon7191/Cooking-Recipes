const express = require("express");

const recipeController = require("../controller/recipeController");

const router = express.Router();

router.route("/").get(recipeController.homePage);
router.route("/categories").get(recipeController.categories);

module.exports = router;
