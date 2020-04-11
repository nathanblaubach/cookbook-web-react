import React     from 'react';
import Page      from '../../components/Page';
import DataStore from '../../repositories/datastore';
import {
  Notecard,
  NotecardTitle,
  NotecardSubtitle,
  NotecardViewSection
} from '../../components/Notecard';

function RecipeView(props) {
  const dataStore = new DataStore();
  const recipe = dataStore.getRecipe(parseInt(props.match.params.number, 10));
  window.scrollTo(0, 0);
  return (
    <Page>
      <Notecard>
        <NotecardTitle       editable={false} title={recipe.name} />
        <NotecardSubtitle    editable={false} subtitle={'Ingredients:'} />
        <NotecardViewSection editable={false} rows={recipe.ingredients} />
        <NotecardSubtitle    editable={false} subtitle={'Instructions:'} />
        <NotecardViewSection editable={false} rows={recipe.instructions} />
      </Notecard>
    </Page>
  );
};

export default RecipeView;
