import { RecipeCardProps } from "../components/RecipeCard/RecipeCard";
import { CookbookRepository } from "../data/cookbook-repository";
import { Category, Recipe } from "../types/recipe";

export class RecipeUseCases {

  constructor(private repository: CookbookRepository) {}

  private includesCaseInsensitive(checkString: string, searchString: string): boolean {
    return checkString.toLocaleLowerCase().includes(searchString.toLocaleLowerCase());
  }

  /**
   * Returns recipes that match the given search term and category ids.
   * 
   * @remarks
   * This search is case-insensitive.
   * 
   * @param searchTerm - The search term to filter recipes and ingredients by
   * @param categoryIds - The categories to filter recipes by
   * @returns List of matching RecipeCardProps
   */
  public getFilteredRecipeCards(searchTerm: string, categoryIds: number[]): RecipeCardProps[] {
    return this.repository
    .getRecipes()
    .reduce(
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
    )
  }

  /**
   * Returns the recipe with the given id
   * @param id The recipe id
   * @returns Recipe
   */
  public getRecipe(id: number): Recipe | undefined {
    return this.repository.getRecipes().find(recipe => recipe.id === id);
  }
  
  /**
   * Returns all categories
   * @returns List of all categories
   */
  public getAllCategories(): Category[] {
    return this.repository.getCategories();
  }

  /**
   * Returns the category with the given id
   * @param id The category id
   * @returns Category
   */
  public getCategory(id: number): Category | undefined {
    return this.repository.getCategories().find(category => category.id === id);
  }

}
