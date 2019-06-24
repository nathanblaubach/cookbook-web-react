import React                                                        from 'react';
import { BackHeader }                                               from '../components/Headers';
import { NotecardViewTitle, NotecardSubtitle, NotecardViewSection } from '../components/Notecard';
import { DataStore }                                                from '../repositories/DataStore';

function RecipeView(props) {
  const dataStore = new DataStore();
  const recipe = dataStore.getRecipe(parseInt(props.match.params.number, 10));
  return (
    <main>
      <BackHeader />
      <NotecardViewTitle title={recipe.name} />
      <NotecardSubtitle subtitle={'Ingredients:'} />
      <NotecardViewSection rows={recipe.ingredients} />
      <NotecardSubtitle subtitle={'Instructions:'} />
      <NotecardViewSection rows={recipe.instructions} />
    </main>
  );
}

export default RecipeView;
