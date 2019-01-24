import React from 'react';
import { DataStore } from '../Data/DataStore';
import { BackHeader } from '../Resources/Headers';
import { NotecardTitle, NotecardSubtitle, NotecardEditSection } from '../Resources/Notecard';

class RecipeEdit extends React.Component {
  constructor(props) {
    super(props);
    const dataStore = new DataStore();
    this.state = {
      recipe_id: props.match.params.number,
      recipe: dataStore.getRecipe(parseInt(props.match.params.number, 10))
    }
  }

  save() {
    const dataStore = new DataStore();
    dataStore.saveRecipe(this.state.recipe);
  }

  render() {
    return (
      <main className="recipe">
        <BackHeader />
        <NotecardTitle title={this.state.recipe.name} />
        <NotecardSubtitle subtitle={'Ingredients:'} />
        <NotecardEditSection rows={this.state.recipe.ingredients} />
        <NotecardSubtitle subtitle={'Instructions:'} />
        <NotecardEditSection rows={this.state.recipe.instructions} />
        <button style={ {width: "100%"}} className={"button"} onClick={() => this.save()}>Save Changes</button>
      </main>
    );
  }
}

export default RecipeEdit;