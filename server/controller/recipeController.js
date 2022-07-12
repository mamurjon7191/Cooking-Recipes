// homePage

const homePage = async (req, res) => {
  res.render("index", { title: "Food-Recipes" });
};

module.exports = {
  homePage,
};
