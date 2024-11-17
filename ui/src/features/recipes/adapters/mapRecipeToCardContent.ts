import {Recipe} from "../recipe.ts";
import {CardContent} from "../../../components/CardGrid/CardGrid.tsx";

export function mapRecipeToCardContent(recipe: Recipe, searchTerm?: string): CardContent {
    const relevantIngredients: string[] = searchTerm
        ? getIngredientsContainingSearchTerm(recipe.ingredients, searchTerm)
        : [];

    return {
        id: recipe.id,
        link: `/recipes/${recipe.id}`,
        title: recipe.name,
        contentLines: relevantIngredients
    };
}

function getIngredientsContainingSearchTerm(ingredients: string[], searchTerm: string): string[] {
    const lowercaseSearchTerm = searchTerm.toLocaleLowerCase();
    return ingredients.filter(ingredient => {
        return ingredient.toLocaleLowerCase().includes(lowercaseSearchTerm);
    });
}
