import {JsonRecipe} from "./json-recipe";

export interface JsonRecipeReader {
    read(): JsonRecipe[];
}
