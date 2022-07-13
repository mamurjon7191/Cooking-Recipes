const mongoose = require("mongoose");

const recipeScheme = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  ingredients: {
    type: Array,
    required: true,
  },
  category: {
    type: Array,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const RecipeModel = mongoose.model("mamurRecipe", recipeScheme);

module.exports = RecipeModel;
