class DataStore {
  constructor() {
    this.data = require("./Data.json");
  }
  getLinks() {
    return this.data.links;
  }
  getCategories() {
    return this.data.categories;
  }
  getRecipeDefaults() {
    return this.data.recipeDefaults;
  }
  getRecipes() {
    return this.data.recipes;
  }
  getRecipe(id) {
    return this.data.recipes.filter(recipe => recipe.id === id)[0];
  }
  saveRecipe(recipe) {
    alert('This is a readonly file');
    console.log(recipe);
  }
}

export { DataStore }
