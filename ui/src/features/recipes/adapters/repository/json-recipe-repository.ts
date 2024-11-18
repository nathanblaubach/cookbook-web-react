import {Recipe} from '../../recipe.ts';
import {RecipeRepository} from "../../recipe-repository.ts";
import {JsonRecipeReader} from './json-recipe-reader.ts';

export class JsonRecipeRepository implements RecipeRepository {
    constructor(private readonly jsonRecipeReader: JsonRecipeReader) {
    }

    public getRecipesBySearchTermAndCategories(searchTerm: string, categories: string[], includeIngredientMatches: boolean): Recipe[] {
        return this.jsonRecipeReader.read().filter(recipe => {
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
        return this.jsonRecipeReader.read().find(recipe => recipe.id === id);
    }

    public getCategories(): string[] {
        const categories: string[] = [];
        this.jsonRecipeReader.read().forEach(recipe => {
            if (!categories.includes(recipe.category)) {
                categories.push(recipe.category);
            }
        });
        return categories;
    }
}
