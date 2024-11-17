import recipes from '../../../assets/recipes.json';
import { Recipe } from '../recipe.ts';
import {RecipeRepository} from "../recipe-repository.ts";

export class JsonRecipeRepository implements RecipeRepository{
  constructor(private readonly recipes: Recipe[] = []) {}

  public getRecipesBySearchTermAndCategories(searchTerm: string, categories: string[], includeIngredientMatches: boolean): Recipe[] {
    return this.recipes.filter(recipe => {
      const recipeNameMatched = this.includesCaseInsensitive(recipe.name, searchTerm);

      const recipeIngredientMatched = includeIngredientMatches && recipe.ingredients
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

  public getCategories(): string[] {
    const categories: string[] = [];
    this.recipes.forEach(recipe => {
      if (!categories.includes(recipe.category)) {
        categories.push(recipe.category);
      }
    });
    return categories;
  }

  public static loadFromJson(): JsonRecipeRepository {
    return new JsonRecipeRepository(recipes as Recipe[]);
  }
}
