import { CardContent } from "../../components/CardGrid/CardGrid";
import { FilterItem } from "../../components/Filter/Filter";
import { RecipeRepository } from "./recipe-repository.ts";
import {mapRecipeToCardContent} from "./mappers/mapRecipeToCardContent.ts";
import {mapCategoryToFilterItem} from "./mappers/mapCategoryToFilterItem.ts";
import {getCheckedFilterItemIds} from "../../common/getCheckedFilterItemIds.ts";

export class RecipeUseCases {

    constructor(private readonly repository: RecipeRepository) {}

    public getRecipeCards(searchTerm: string, categoryFilters: FilterItem[]): CardContent[] {
        const checkedCategories: string[] = getCheckedFilterItemIds(categoryFilters);
        const ingredientSearchIsActive: boolean = searchTerm.length >= 3;
        return this.repository
            .getRecipesBySearchTermAndCategories(searchTerm, checkedCategories, ingredientSearchIsActive)
            .map(recipe => mapRecipeToCardContent(recipe, ingredientSearchIsActive ? searchTerm : undefined));
    }

    public getCategoryFilterItems(): FilterItem[] {
        return this.repository
            .getCategories()
            .map(mapCategoryToFilterItem);
    }

}
