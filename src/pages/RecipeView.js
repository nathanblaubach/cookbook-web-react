import React                                                        from 'react';
import { BackHeader }                                               from '../components/Headers';
import { NotecardViewTitle, NotecardSubtitle, NotecardViewSection } from '../components/Notecard';
import { DataStore }                                                from '../repositories/DataStore';

function RecipeView(props) {
  const dataStore = new DataStore();
  const recipe = dataStore.getRecipe(parseInt(props.match.params.number, 10));
  return React.createElement('main', {},
    React.createElement(BackHeader),
    React.createElement(NotecardViewTitle,   { title: recipe.name }),
    React.createElement(NotecardSubtitle,    { subtitle: 'Ingredients:' }),
    React.createElement(NotecardViewSection, { rows: recipe.ingredients }),
    React.createElement(NotecardSubtitle,    { subtitle: 'Instructions:' }),
    React.createElement(NotecardViewSection, { rows: recipe.instructions })
  );
}

export default RecipeView;
