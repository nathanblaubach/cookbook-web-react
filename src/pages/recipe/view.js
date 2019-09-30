import React     from 'react';
import DataStore from '../../repositories/datastore';
import Header    from '../../components/header';
import {
  NotecardViewTitle,
  NotecardSubtitle,
  NotecardViewSection
} from '../../components/notecard';

function RecipeView(props) {
  const dataStore = new DataStore();
  const recipe = dataStore.getRecipe(parseInt(props.match.params.number, 10));
  window.scrollTo(0, 0);
  return (
    <div>
      <Header />
      <main>
        <NotecardViewTitle   title={recipe.name} />
        <NotecardSubtitle    subtitle={'Ingredients:'} />
        <NotecardViewSection rows={recipe.ingredients} />
        <NotecardSubtitle    subtitle={'Instructions:'} />
        <NotecardViewSection rows={recipe.instructions} />
      </main>
    </div>
  );
};

export default RecipeView;
