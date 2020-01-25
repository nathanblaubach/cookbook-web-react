import React     from 'react';
import DataStore from '../../repositories/datastore';
import Header    from '../../components/header';
import { 
  NotecardEditTitle, 
  NotecardSubtitle, 
  NotecardEditSection 
} from '../../components/notecard';

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
  handleNameChange(event) {
    let tempRecipe = this.state.recipe;
    tempRecipe.name = event.target.value;
    this.setState({ recipe: tempRecipe });
  }
  handleCategoryChange(event) {
    let tempRecipe = this.state.recipe;
    tempRecipe.category = parseInt(event.target.value);
    this.setState({ recipe: tempRecipe });
  }
  save() {
    const dataStore = new DataStore();
    dataStore.saveRecipe(this.state.recipe);
  }
  render() {
    return (
      <div>
        <Header />
        <main>
          <NotecardEditTitle   placeholder={"Enter Recipe Name Here"} title={this.state.recipe.name} onNameChange={this.handleNameChange} />
          <NotecardSubtitle    subtitle={"Ingredients"} />
          <NotecardEditSection placeholder={"1 Cup Sugar..."} rows={this.state.recipe.ingredients} />
          <NotecardSubtitle    subtitle={"Instructions"} />
          <NotecardEditSection placeholder={"Mix the ingredients together..."} rows={this.state.recipe.instructions} />
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
        </main>
      </div>
    );
  }
}

export default RecipeAdd;
