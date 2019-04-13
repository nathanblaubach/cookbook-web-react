class DataStore {
  constructor() {
    this.categories = require("./Categories.json").data;
    this.recipes = require("./Recipes.json").data;
    this.links = require("./Links.json").data;
  }
  getCategories() {
    return this.categories;
  }
  getRecipes() {
    return this.recipes;
  }
  getLinks() {
    return this.links;
  }
  getRecipe(id) {
    return this.recipes.filter(recipe => recipe.id === id)[0];
  }
  saveRecipe(recipe) {
    alert('This is a readonly file');
    console.log(recipe);
  }
}

export { DataStore }
