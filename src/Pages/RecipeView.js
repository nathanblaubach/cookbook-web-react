import React from 'react';
import { DataStore } from '../Data/DataStore';
import { BackHeader } from '../Resources/Headers';
import { NotecardTitle, NotecardSubtitle, NotecardViewSection } from '../Resources/Notecard';

function RecipeView(props) {
  const dataStore = new DataStore();
  const recipe = dataStore.getRecipe(parseInt(props.match.params.number, 10));
  return (
    <main className="recipe">
      <BackHeader />
      <NotecardTitle title={recipe.name} />
      <NotecardSubtitle subtitle={'Ingredients:'} />
      <NotecardViewSection rows={recipe.ingredients} />
      <NotecardSubtitle subtitle={'Instructions:'} />
      <NotecardViewSection rows={recipe.instructions} />
    </main>
  );
}

export default RecipeView;