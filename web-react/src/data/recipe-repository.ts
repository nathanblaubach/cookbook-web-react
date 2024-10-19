import data from './recipe-repository.json';
import { Recipe } from '../types/recipe';

export class RecipeRepository {
  constructor(private recipes: Array<Recipe> = []) {}

  public getRecipesBySearchTermAndCategories(searchTerm: string, categories: Array<string>): Array<Recipe> {
    return this.recipes.filter(recipe => {
      const recipeNameMatched = this.includesCaseInsensitive(recipe.name, searchTerm);

      const recipeIngredientMatched = searchTerm.length >= 3 && recipe.ingredients
        .some((ingredient: string) => this.includesCaseInsensitive(ingredient, searchTerm));

      const categoryMatched = categories.length === 0 || categories.includes(recipe.category);

      return (recipeNameMatched || recipeIngredientMatched) && categoryMatched;
    });
  }

  private includesCaseInsensitive(checkString: string, searchString: string): boolean {
    return checkString.toLocaleLowerCase().includes(searchString.toLocaleLowerCase());
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
