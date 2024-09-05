import data from './recipe-repository.json';
import { Recipe } from '../types';

export class RecipeRepository {
  constructor(private recipes: Array<Recipe> = []) {}

  public getRecipes(): Array<Recipe> {
    return this.recipes;
  }

  public getRecipeById(id: number): Recipe | undefined {
    return this.recipes.find(recipe => recipe.id === id);
  }

  public getCategories(): Array<string> {
    const categories: Array<string> = [];
    this.recipes.forEach(recipe => {
      if (!categories.includes(recipe.category)) {
        categories.push(recipe.category);
      }
    });
    return categories;
  }

  public static loadFromJson(): RecipeRepository {
    return new RecipeRepository(data.recipes as Array<Recipe>);
  }
}
