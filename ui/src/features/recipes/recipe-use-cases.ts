import { CardContent } from "../../components/CardGrid/CardGrid";
import { FilterItem } from "../../components/Filter/Filter";
import { RecipeRepository } from "./recipe-repository";

export class RecipeUseCases {

  constructor(private readonly repository: RecipeRepository) {}

  public getRecipeCards(searchTerm: string, categoryFilters: FilterItem[]): CardContent[] {
    const ingredientSearchActive: boolean = searchTerm.length >= 3;

    const activeCategories: string[] = categoryFilters.reduce(
      (acc: string[], filter: FilterItem): string[] => {
        if (filter.checked) {
          acc.push(filter.id);
        }
        return acc; 
      },
      []
    );

    return this.repository
      .getRecipesBySearchTermAndCategories(searchTerm, activeCategories)
      .map(recipe => {
        const relevantIngredients = !ingredientSearchActive ? [] : recipe.ingredients
          .filter((ingredient: string) => ingredient.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));

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
      id: category,
      name: category,
      checked: false
    }));
  }

}
