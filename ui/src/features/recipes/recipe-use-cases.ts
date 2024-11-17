import { CardContent } from "../../components/CardGrid/CardGrid";
import { FilterItem } from "../../components/Filter/Filter";
import { RecipeRepository } from "./recipe-repository";
import {mapRecipeToCardContent} from "./mappers/mapRecipeToCardContent.ts";
import {mapCategoryToFilterItem} from "./mappers/mapCategoryToFilterItem.ts";

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
            .map(recipe => mapRecipeToCardContent(recipe, ingredientSearchActive ? searchTerm : undefined));
    }

    public getCategoryFilterItems(): FilterItem[] {
        return this.repository
            .getCategories()
            .map(mapCategoryToFilterItem);
    }

}
