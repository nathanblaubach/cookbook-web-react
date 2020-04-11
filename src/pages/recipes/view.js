import React     from 'react';
import DataStore from '../../repositories/datastore';
import Header    from '../../components/header';
import {
  Notecard,
  NotecardTitle,
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
        <Notecard>
          <NotecardTitle       editable={false} title={recipe.name} />
          <NotecardSubtitle    editable={false} subtitle={'Ingredients:'} />
          <NotecardViewSection editable={false} rows={recipe.ingredients} />
          <NotecardSubtitle    editable={false} subtitle={'Instructions:'} />
          <NotecardViewSection editable={false} rows={recipe.instructions} />
        </Notecard>
      </main>
    </div>
  );
};

export default RecipeView;
