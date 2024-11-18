import recipes from '../assets/recipes.json';
import {JsonRecipe} from '../features/recipes/adapters/repository/json-recipe';
import {JsonRecipeReader} from '../features/recipes/adapters/repository/json-recipe-reader';

export class FileJsonRecipeReader implements JsonRecipeReader {
    read(): JsonRecipe[] {
        return recipes as JsonRecipe[];
    }
}