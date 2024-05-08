import * as jsonFileCookbookData from './data.json';

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
}

type CategoryData = {
  id: number;
  name: string;
}

export type Recipe = {
  id: number;
  name: string;
  category: Category | undefined;
  ingredients: Array<string>;
  instructions: Array<string>;
}

export type Category = {
  id: number;
  name: string;
}

export class CookbookRepository {

  private categories: Array<Category>;
  private recipes: Array<Recipe>;

  constructor(categories: Array<Category> = [], recipes: Array<Recipe> = []) {
    this.categories = categories;
    this.recipes = recipes;
  }

  static loadFromJson = (): CookbookRepository => {
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
        category: data.categories.find(category => category.id === recipe.categoryid)!,
        ingredients: recipe.ingredients,
        instructions: recipe.instructions
      })).sort((a: Recipe, b: Recipe) => a.name < b.name ? -1 : 1);

    return new CookbookRepository(categories, recipes);
  }

  public getRecipes = (): Array<Recipe> => this.recipes;

  public getRecipe = (id: number): Recipe | undefined => this.recipes.find(recipe => recipe.id === id);

  public getCategories = (): Array<Category> => this.categories;

  public getCategory = (id: number): Category | undefined => this.categories.find(category => category.id === id);
  
  public saveRecipe = (recipe: Recipe): void => {
    console.log(recipe);
    alert('This is a readonly file');
  }
}
