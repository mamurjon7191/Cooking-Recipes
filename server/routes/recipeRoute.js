const express = require("express");

const recipeController = require("../controller/recipeController");

const router = express.Router();

router.route("/").get(recipeController.homePage);
router.route("/categories").get(recipeController.categories);
router.route("/categories/:id").get(recipeController.categoriesById);
router.route("/recipe/:id").get(recipeController.recipeById);

module.exports = router;
