const mongoose = require("mongoose");

const categoryScheme = new mongoose.Schema({
  name: {
    type: String,
  },
  img: {
    type: String,
  },
});

const CategoryModel = mongoose.model("mamurCategory", categoryScheme);

module.exports = CategoryModel;
