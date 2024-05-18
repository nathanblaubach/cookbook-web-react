import { RecipeCardProps } from "../components/RecipeCard";
import { Category, CookbookRepository, Recipe } from "../data/cookbook-repository";

export class RecipeUseCases {

  constructor(private repository: CookbookRepository) {}

  getFilteredRecipeCards = (searchTerm: string, categoryIds: number[]): RecipeCardProps[] => this.repository.getRecipes().reduce(
    (recipeCards: RecipeCardProps[], recipe: Recipe) => {

      const matchesRecipeName: boolean = this.includesCaseInsensitive(recipe.name, searchTerm);
      const matchesAnyRecipeIngredient: boolean = recipe.ingredients.some(ingredient => this.includesCaseInsensitive(ingredient, searchTerm));
      const matchesRecipeCategory: boolean = categoryIds.length === 0 || categoryIds.includes(recipe.category.id);

      if ((matchesRecipeName || matchesAnyRecipeIngredient) && matchesRecipeCategory) {

        // If the search term is 3 or more characters long, we want to display the ingredients that match the search term
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

  getRecipe = (id: number): Recipe | undefined => this.repository.getRecipes().find(recipe => recipe.id === id);

  getAllCategories = (): Category[] => this.repository.getCategories();

  getCategory = (id: number): Category | undefined => this.repository.getCategories().find(category => category.id === id);

  includesCaseInsensitive = (checkString: string, searchString: string): boolean => checkString.toLocaleLowerCase().includes(searchString.toLocaleLowerCase());
}
