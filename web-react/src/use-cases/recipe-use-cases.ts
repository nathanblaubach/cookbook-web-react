import { RecipeCardProps } from "../components/RecipeCard";
import { Recipe } from "../data/cookbook-repository";

export class RecipeUseCases {
  getFilteredRecipeCards = (recipes: Recipe[], searchTerm: string, categoryIds: number[]): RecipeCardProps[] => recipes.reduce(
    (recipeCards: RecipeCardProps[], recipe: Recipe) => {

      const matchesRecipeName: boolean = this.includesCaseInsensitive(recipe.name, searchTerm);
      const matchesAnyRecipeIngredient: boolean = recipe.ingredients.some(ingredient => this.includesCaseInsensitive(ingredient, searchTerm));

      if (matchesRecipeName || matchesAnyRecipeIngredient) {
        const relevantIngredients: string[] = searchTerm.length >= 3
          ? recipe.ingredients.filter(ingredient => this.includesCaseInsensitive(ingredient, searchTerm))
          : [];

        recipeCards.push({
          id: recipe.id,
          name: recipe.name,
          relevantIngredients: relevantIngredients
        });
      }

      return recipeCards;
    },
    []
  );

  includesCaseInsensitive = (checkString: string, searchString: string): boolean => checkString.toLocaleLowerCase().includes(searchString.toLocaleLowerCase());
}
