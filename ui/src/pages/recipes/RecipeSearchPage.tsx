import React, { useState } from 'react';
import { Page } from '../../components/Page/Page';
import { SearchArea } from '../../components/SearchArea/SearchArea';
import { Filter, FilterItem } from '../../components/Filter/Filter';
import { CardGrid } from '../../components/CardGrid/CardGrid';
import { RecipeUseCases } from '../../features/recipes/recipe-use-cases';

type RecipeSearchPageProps = {
  recipeUseCases: RecipeUseCases;
};

export function RecipeSearchPage({ recipeUseCases }: Readonly<RecipeSearchPageProps>): React.JSX.Element {

  const [searchString, setSearchString] = useState<string>('');
  const [categoryFilters, setCategoryFilters] = useState<FilterItem[]>(recipeUseCases.getCategoryFilterItems());

  const recipeCards = recipeUseCases.getRecipeCards(searchString, categoryFilters);

  return (
    <Page>
      <h1>Recipes</h1>
      <SearchArea searchString={searchString} onSearchStringChange={setSearchString}>
        <Filter type='Category' items={categoryFilters} onItemsUpdate={setCategoryFilters} />
      </SearchArea>
      <CardGrid cards={recipeCards} />
    </Page>
  );

}
