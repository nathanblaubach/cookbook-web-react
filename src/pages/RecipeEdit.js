import React                                                        from 'react';
import { BackHeader }                                               from '../components/Headers';
import { NotecardEditTitle, NotecardSubtitle, NotecardEditSection } from '../components/Notecard';
import { DataStore }                                                from '../repositories/DataStore';

class RecipeEdit extends React.Component {
  constructor(props) {
    super(props);
    const dataStore = new DataStore();
    this.state = {
      recipe: dataStore.getRecipe(parseInt(props.match.params.number, 10)),
      categories: dataStore.getCategories()
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
  }
  handleNameChange(event) {
    let tempRecipe = this.state.recipe;
    tempRecipe.name = event.target.value;
    this.setState({ recipe: tempRecipe });
  }
  handleCategoryChange(event) {
    let tempRecipe = this.state.recipe;
    tempRecipe.category = event.target.value;
    this.setState({ recipe: tempRecipe });
  }
  save() {
    const dataStore = new DataStore();
    dataStore.saveRecipe(this.state.recipe);
  }
  render() {
    return (
      <main>
        <BackHeader />
        <NotecardEditTitle title={this.state.recipe.name} placeholder={"Enter Recipe Name Here"} onNameChange={this.handleNameChange} />
        <NotecardSubtitle subtitle={'Ingredients:'} />
        <NotecardEditSection rows={this.state.recipe.ingredients} placeholder={"1 Cup Sugar..."} />
        <NotecardSubtitle subtitle={'Instructions:'} />
        <NotecardEditSection rows={this.state.recipe.instructions} placeholder={"Mix the ingredients together..."} />
        <select value={this.state.recipe.category} onChange={this.handleCategoryChange}>
          {
            this.state.categories.map(category =>
              <option key={category.key} value={category.key}>{category.name}</option>
            )
          }
        </select><br />
        <button onClick={() => this.save()}>Save Changes</button>
      </main>
    );
  }
}

export default RecipeEdit;
