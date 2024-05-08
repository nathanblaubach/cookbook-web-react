import React, { useState } from 'react';
import { Page } from '../components/Page';
import { RecipeCard, RecipeCardProps } from '../components/RecipeCard';
import { CookbookRepository, Recipe, Category } from '../data/cookbook-repository';
import cookbookLogo from '../assets/filter.svg';

type SearchPageProps = {
  repository: CookbookRepository;
};

export const Search = ({ repository }: SearchPageProps): React.JSX.Element => {
  const [recipes] = useState<Array<Recipe>>(repository.getRecipes());
  const [categories] = useState<Array<Category>>(repository.getCategories());
  const [checkedCategories, setCheckedCategories] = useState<Array<number>>([]);
  const [searchString, setSearchString] = useState<string>('');
  const [showCategories, setShowCategories] = useState<boolean>(false);

  const categoryIsSelected = (categoryId: number): boolean => checkedCategories.length === 0 || checkedCategories.includes(categoryId);
  const containsSearchString = (checkString: string): boolean => checkString.toUpperCase().includes(searchString.toUpperCase());

  const toggleCategorySelected = (categoryIdToToggle: number): void => {
    if (checkedCategories.includes(categoryIdToToggle)) {
      setCheckedCategories(checkedCategories.filter(categoryId => categoryId !== categoryIdToToggle));
    } else {
      setCheckedCategories(checkedCategories.concat(categoryIdToToggle));
    }
  }

  const recipeCards: RecipeCardProps[] = recipes
    .filter(recipe => categoryIsSelected(recipe.category?.id ?? -1) && (containsSearchString(recipe.name) || (searchString.length > 2 && recipe.ingredients.some(ingredient => containsSearchString(ingredient)))))
    .map(recipe => ({
      id: recipe.id,
      name: recipe.name,
      relevantIngredients: searchString.length > 2 ? recipe.ingredients.filter(ingredient => containsSearchString(ingredient)) : []
    }));

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
                    onChange={() => toggleCategorySelected(category.id)} 
                  />
                  <label onClick={() => toggleCategorySelected(category.id)}>{category.name}</label>
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
