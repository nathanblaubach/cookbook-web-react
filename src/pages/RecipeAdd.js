import React                                                        from 'react';
import Header                                                       from '../components/Header';
import { NotecardEditTitle, NotecardSubtitle, NotecardEditSection } from '../components/Notecard';
import { DataStore }                                                from '../repositories/DataStore';

class RecipeAdd extends React.Component {
  constructor(props) {
    super(props);
    const dataStore = new DataStore();
    this.state = {
      recipe: dataStore.getRecipeDefaults(),
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
    return React.createElement('div', {},
      React.createElement(Header, { currentPath: this.props.location.pathname }),
      React.createElement('main', {},
        React.createElement(NotecardEditTitle,   { title: this.state.recipe.name,  placeholder: "Enter Recipe Name Here", onNameChange: this.handleNameChange }),
        React.createElement(NotecardSubtitle,    { subtitle: 'Ingredients:' }),
        React.createElement(NotecardEditSection, { rows: this.state.recipe.ingredients, placeholder: '1 Cup Sugar...' }),
        React.createElement(NotecardSubtitle,    { subtitle: 'Instructions:' }),
        React.createElement(NotecardEditSection, { rows: this.state.recipe.instructions, placeholder: 'Mix the ingredients together...' }),
        React.createElement('select',            { subtitle: 'Ingredients:' },
          this.state.categories.map(category =>
            React.createElement('option', { key: category.key, value: category.key }, category.name)
          )
        ),
        React.createElement('br'),
        React.createElement('button', { className: "button", onClick: () => this.save() }, 'Save Changes')
      )
    );
  }
}

export default RecipeAdd;
