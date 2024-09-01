import data from './data.json';
import { Recipe } from '../types';

export class CookbookRepository {
  constructor(private recipes: Array<Recipe> = []) {}

  public getRecipes(): Array<Recipe> {
    return this.recipes;
  }

  public getCategories(): Array<string> {
    const categories: Array<string> = [];
    this.recipes.forEach(recipe => {
      if (!categories.includes(recipe.category)) {
        categories.push(recipe.category);
      }
    })
    return categories;
  }

  public static loadFromJson(): CookbookRepository {
    return new CookbookRepository(data.recipes as Array<Recipe>);
  }
}
