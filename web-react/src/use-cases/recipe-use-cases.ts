import { CardContent } from "../components/CardGrid/CardGrid";
import { FilterItem } from "../components/Filter/Filter";
import { CookbookRepository } from "../data/cookbook-repository";
import { Recipe } from "../types";

export class RecipeUseCases {

  constructor(private repository: CookbookRepository) {}

  private includesCaseInsensitive(checkString: string, searchString: string): boolean {
    return checkString.toLocaleLowerCase().includes(searchString.toLocaleLowerCase());
  }

  /**
   * Returns recipes that match the given search term and category ids
   * 
   * @remarks
   * This search is case-insensitive.
   * 
   * @param searchTerm - The search term to filter recipes and ingredients by
   * @param categoryFilters - The categories to filter recipes by
   * @returns CardContent array with the recipe details
   */
  public getRecipeCards(searchTerm: string, categoryFilters: FilterItem[]): CardContent[] {
    const ingredientSearchActive: boolean = searchTerm.length >= 3;

    const activeCategories: string[] = categoryFilters
      .filter(filter => filter.checked)
      .map(filter => filter.id);

    return this.repository
      .getRecipes()
      .filter(recipe => {
        const matchesRecipeName: boolean = this.includesCaseInsensitive(recipe.name, searchTerm);
        const matchesAnyRecipeIngredient: boolean = ingredientSearchActive && recipe.ingredients.some(ingredient => this.includesCaseInsensitive(ingredient, searchTerm));
        const matchesCategorySelection: boolean = activeCategories.length === 0 || activeCategories.includes(recipe.category);

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

  /**
   * Returns filter categories as filter items for the search area
   * @returns FilterItem array with the categories
   */
  public getCategoryFilterItems(): FilterItem[] {
    return this.repository.getCategories().map(category => ({
      id: category,
      name: category,
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
  public getAllCategories(): string[] {
    return this.repository.getCategories();
  }

}
