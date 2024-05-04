import { Category } from "../models/category";
import { Recipe } from "../models/recipe";
import * as cookbookData from './data.json';

class FlatRecipe {
  public id: number;
  public name: string;
  public categoryid: number;
  public ingredients: Array<string>;
  public instructions: Array<string>;
  constructor(id: number, name: string, categoryid: number, ingredients: Array<string>, instructions: Array<string>) {
    this.id = id;
    this.name = name;
    this.categoryid = categoryid;
    this.ingredients = ingredients;
    this.instructions = instructions;
  }
}

class RecipeRepository {
  categories: Array<Category>;
  recipes: Array<FlatRecipe>;
  constructor(categories: Array<Category>, recipes: Array<FlatRecipe>) {
    this.categories = categories;
    this.recipes = recipes;
  }
}

export class DataStore {

  categories: Array<Category>;
  recipes: Array<Recipe>;

  constructor() {
    const data: RecipeRepository = cookbookData as RecipeRepository;
    this.categories = data.categories;
    this.recipes = data.recipes.map(recipe => new Recipe(
      recipe.id, 
      recipe.name, 
      this.categories.find(category => category.id === recipe.categoryid)!, 
      recipe.ingredients, 
      recipe.instructions)
    ).sort((a: Recipe, b: Recipe) => a.name < b.name ? -1 : 1);
  }

  getCategories = (): Array<Category> => this.categories;

  getRecipes = (): Array<Recipe> => this.recipes;

  getRecipe = (id: number): Recipe | undefined => this.recipes.find(recipe => recipe.id === id);

  saveRecipe = (recipe: Recipe): void => {
    console.log(recipe);
    alert('This is a readonly file');
  }
}
