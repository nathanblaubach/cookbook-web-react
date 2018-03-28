exports.data = function () {
  const categories = require("./Categories.json").data;
  const recipes = require("./Recipes.json").data;
  return {
    "categories" : categories,
    "recipes" : recipes,
  }
}

exports.getRecipe = function (id) {
  const recipes = require("./Recipes.json").data;
  return recipes.filter(recipe => recipe.id === id)[0];
}