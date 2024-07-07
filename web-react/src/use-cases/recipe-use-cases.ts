import { CardContent } from "../components/CardGrid/CardGrid";
import { FilterItem } from "../components/Filter/Filter";
import { CookbookRepository } from "../data/cookbook-repository";
import { Category, Recipe } from "../types";

export class RecipeUseCases {

  constructor(private repository: CookbookRepository) {}

  private includesCaseInsensitive(checkString: string, searchString: string): boolean {
    return checkString.toLocaleLowerCase().includes(searchString.toLocaleLowerCase());
  }

  private getActiveFilterIds(filters: FilterItem[]): number[] {
    return filters
      .filter(filter => filter.checked)
      .map(filter => filter.id);
  }

  /**
   * Returns recipes that match the given search term and category ids.
   * 
   * @remarks
   * This search is case-insensitive.
   * 
   * @param searchTerm - The search term to filter recipes and ingredients by
   * @param categoryFilters - The categories to filter recipes by
   * @returns CardContent array with the recipe details
   */
  public getRecipeCards(searchTerm: string, categoryFilters: FilterItem[]): CardContent[] {
    const activeCategoryIds: number[] = this.getActiveFilterIds(categoryFilters);
    const ingredientSearchActive: boolean = searchTerm.length >= 3;
    return this.repository
      .getRecipes()
      .filter(recipe => {
        const matchesRecipeName: boolean = this.includesCaseInsensitive(recipe.name, searchTerm);
        const matchesAnyRecipeIngredient: boolean = ingredientSearchActive && recipe.ingredients.some(ingredient => this.includesCaseInsensitive(ingredient, searchTerm));
        const matchesCategorySelection: boolean = activeCategoryIds.length === 0 || activeCategoryIds.includes(recipe.category.id);

        return (matchesRecipeName || matchesAnyRecipeIngredient) && matchesCategorySelection;
      })
      .map(recipe => {
        const relevantIngredients = !ingredientSearchActive ? [] : recipe.ingredients
          .filter(ingredient => this.includesCaseInsensitive(ingredient, searchTerm));

        return {
          id: recipe.id,
          link: `/recipes/${recipe.id}`,
          title: recipe.name,
          contentLines: relevantIngredients
        }
      });
  }

  public getCategoryFilterItems(): FilterItem[] {
    return this.repository.getCategories().map(category => ({
      id: category.id,
      name: category.name,
      checked: false
    }));
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
