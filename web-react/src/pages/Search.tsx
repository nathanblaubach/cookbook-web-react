import React, { useState } from 'react';
import { Page } from '../components/Page/Page';
import { RecipeCard, RecipeCardProps } from '../components/RecipeCard/RecipeCard';
import { RecipeUseCases } from '../use-cases/recipe-use-cases';
import { Category } from '../types/recipe';
import cookbookLogo from '../assets/filter.svg';

type SearchPageProps = {
  recipeUseCases: RecipeUseCases;
};

export function Search({ recipeUseCases }: SearchPageProps): React.JSX.Element {

  const [searchString, setSearchString] = useState<string>('');
  const [showCategories, setShowCategories] = useState<boolean>(false);
  const [checkedCategories, setCheckedCategories] = useState<Array<number>>([]);

  function toggleChecked(categoryId: number): void {
    const newCheckedCategories = checkedCategories.includes(categoryId)
      ? checkedCategories.filter(categoryId => categoryId !== categoryId)
      : checkedCategories.concat(categoryId);
    setCheckedCategories(newCheckedCategories);
  }

  const categories: Category[] = recipeUseCases.getAllCategories();
  const recipeCards: RecipeCardProps[] = recipeUseCases.getFilteredRecipeCards(searchString, checkedCategories);

  return (
    <Page>
      <div className="searchCriteria">
        <img src={cookbookLogo} onClick={() => setShowCategories(!showCategories)} />
        <input className="searchBar" type="textbox" placeholder="Search" value={searchString} onChange={(event) => setSearchString(event.target.value)} />
        <div className="categories">
          {
            showCategories !== true ? [] : categories
              .map(category =>
                <div className="category" key={category.id} style={{marginBottom: '.5rem'}}>
                  <input
                    type="checkbox"
                    id={category.id.toString()}
                    checked={checkedCategories.includes(category.id)}
                    onChange={() => toggleChecked(category.id)}
                  />
                  <label onClick={() => toggleChecked(category.id)}>{category.name}</label>
                </div>
              )
          }
        </div>
      </div>

      <div className="cards">
        { recipeCards.map(recipeCard => <RecipeCard key={recipeCard.id} {...recipeCard} />) }
      </div>
    </Page>
  );

}
