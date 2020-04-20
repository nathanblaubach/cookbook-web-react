class DataStore {
  constructor() {
    this.data = require("./data.json");
  }
  getCategories = () => this.data.categories;
  getRecipes = () => this.data.recipes;
  getRecipe = (id) => this.data.recipes.filter(recipe => recipe.id === id)[0];
  saveRecipe = (recipe) => {
    console.log(recipe);
    alert('This is a readonly file');
  }
}

export default DataStore;
