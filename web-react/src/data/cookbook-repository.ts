import * as jsonFileCookbookData from './data.json';
import { Category, Recipe } from '../types';

type CookbookData = {
  categories: Array<CategoryData>;
  recipes: Array<RecipeData>;
};

type RecipeData = {
  id: number;
  name: string;
  categoryid: number;
  ingredients: Array<string>;
  instructions: Array<string>;
};

type CategoryData = {
  id: number;
  name: string;
};

export class CookbookRepository {

  constructor(private categories: Array<Category> = [], private recipes: Array<Recipe> = []) {}

  public getRecipes(): Array<Recipe> {
    return this.recipes;
  }

  public getCategories(): Array<Category> {
    return this.categories;
  }

  public static loadFromJson(): CookbookRepository {
    const data: CookbookData = jsonFileCookbookData as CookbookData;

    const categories: Category[] = data.categories
      .map(category => ({ 
        id: category.id,
        name: category.name
      }));

    const recipes: Recipe[] = data.recipes
      .map(recipe => ({
        id: recipe.id,
        name: recipe.name,
        category: categories.find(category => category.id === recipe.categoryid)!,
        ingredients: recipe.ingredients,
        instructions: recipe.instructions
      })).sort((a: Recipe, b: Recipe) => a.name < b.name ? -1 : 1);

    return new CookbookRepository(categories, recipes);
  }
}
