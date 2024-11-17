import {Recipe} from "./recipe.ts";

export interface RecipeRepository {
    getRecipesBySearchTermAndCategories(searchTerm: string, categories: string[], includeIngredientMatches: boolean): Recipe[];
    getRecipeById(id: number): Recipe | undefined;
    getCategories(): string[];
}
