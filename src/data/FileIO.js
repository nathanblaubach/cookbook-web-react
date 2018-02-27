exports.data = function () {
  const categories = require("./Categories.json").data;
  const recipes = require("./Recipes.json").data;
  return {
    "categories" : categories,
    "recipes" : recipes,
  }
}