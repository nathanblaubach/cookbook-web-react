import {Recipe} from "./recipe.ts";

export interface RecipeRepository {
    getRecipesBySearchTermAndCategories(searchTerm: string, categories: Array<string>): Array<Recipe>;
    getRecipeById(id: number): Recipe | undefined;
    getCategories(): Array<string>;
}
