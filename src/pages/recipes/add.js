import React     from 'react';
import Page      from '../../components/Page';
import DataStore from '../../repositories/datastore';
import { 
  Notecard,
  NotecardTitle,
  NotecardSubtitle,
  NotecardEditSection
} from '../../components/Notecard';

class RecipeAdd extends React.Component {
  constructor(props) {
    super(props);
    const dataStore = new DataStore();
    const defaults = {
      category: 0,
      id: null,
      name: "",
      ingredients: [""],
      instructions: [""]
    };
    this.state = {
      recipe: defaults,
      categories: dataStore.getCategories()
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
  }
  handleNameChange = (event) => {
    let tempRecipe = this.state.recipe;
    tempRecipe.name = event.target.value;
    this.setState({ recipe: tempRecipe });
  }
  handleCategoryChange = (event) => {
    let tempRecipe = this.state.recipe;
    tempRecipe.category = parseInt(event.target.value);
    this.setState({ recipe: tempRecipe });
  }
  save = () => {
    const dataStore = new DataStore();
    dataStore.saveRecipe(this.state.recipe);
  }
  render = () => (
    <Page>
      <Notecard>
        <NotecardTitle       editable={true} placeholder={"Enter Recipe Name Here"} title={this.state.recipe.name} onNameChange={this.handleNameChange} />
        <NotecardSubtitle    editable={false} subtitle={"Ingredients"} />
        <NotecardEditSection editable={true} placeholder={"1 Cup Sugar..."} rows={this.state.recipe.ingredients} />
        <NotecardSubtitle    editable={false} subtitle={"Instructions"} />
        <NotecardEditSection editable={true} placeholder={"Mix the ingredients together..."} rows={this.state.recipe.instructions} />
      </Notecard>
      <p>Please select a Category:</p>
      <select value={this.state.recipe.category} onChange={this.handleCategoryChange}>
        {
          this.state.categories.map(category =>
            <option key={category.key} value={category.key}>{category.name}</option>
          )
        }
      </select>
      <br /><br />
      <button className="button" onClick={() => this.save()}>Save Changes</button>
    </Page>
  );
}

export default RecipeAdd;
