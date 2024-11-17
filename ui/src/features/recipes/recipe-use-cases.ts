import { CardContent } from "../../components/CardGrid/CardGrid";
import { FilterItem } from "../../components/Filter/Filter";
import { RecipeRepository } from "./recipe-repository";
import {mapRecipeToCardContent} from "./mappers/mapRecipeToCardContent.ts";
import {mapCategoryToFilterItem} from "./mappers/mapCategoryToFilterItem.ts";
import {getCheckedFilterItemIds} from "../../common/getCheckedFilterItemIds.ts";

export class RecipeUseCases {

    constructor(private readonly repository: RecipeRepository) {}

    public getRecipeCards(searchTerm: string, categoryFilters: FilterItem[]): CardContent[] {
        return this.repository
            .getRecipesBySearchTermAndCategories(searchTerm, getCheckedFilterItemIds(categoryFilters))
            .map(recipe => mapRecipeToCardContent(recipe, searchTerm.length >= 3 ? searchTerm : undefined));
    }

    public getCategoryFilterItems(): FilterItem[] {
        return this.repository
            .getCategories()
            .map(mapCategoryToFilterItem);
    }

}
