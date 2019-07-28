import React            from 'react';
import { SearchHeader } from '../components/Headers';
import { Menu }         from '../components/Menu';
import { CardGrid }     from '../components/CardGrid';
import { AddButton }    from '../components/AddButton';
import { DataStore }    from '../repositories/DataStore';

class Cookbook extends React.Component {

  constructor(props) {
    super(props);
    const dataStore = new DataStore();
    this.state = {
      categories: dataStore.getCategories(),
      recipes: dataStore.getRecipes(),
      checkedCategories: [],
      searchString: "",
      showMenu: false,
    }
    this.updateSearchString = this.updateSearchString.bind(this);
  }

  toggleMenuVisibility() {
    const shouldShow = !this.state.showMenu;
    this.setState({ showMenu: shouldShow });
  }

  updateCategorySelections(i) {
    const updatedCategories = this.state.checkedCategories.includes(i)
      ? this.state.checkedCategories.filter(cat => cat !== i)
      : this.state.checkedCategories.concat(i);
    this.setState({
      checkedCategories: updatedCategories,
    });
  }
  
  categoryIsSelected(category_id) {
    return this.state.checkedCategories.includes(category_id) || this.state.checkedCategories.length === 0
  }

  updateSearchString(event) {
    this.setState({ searchString: event.target.value });
  }
  
  searchStringIsEmpty() {
    return this.state.searchString === '';
  }

  containsSearchString(checkString) {
    return checkString.toUpperCase().includes(this.state.searchString.toUpperCase())
  }

  render() {
    const recipeSearchResults = this.state.recipes
      .filter(recipe => this.categoryIsSelected(recipe.category))
      .filter(recipe => this.containsSearchString(recipe.name))
      .map(recipe => Object.create({
        id: recipe.id,
        name: recipe.name,
        relevantIngredients: []
      }));

    const ingredientSearchResults = this.searchStringIsEmpty() ? [] : this.state.recipes
      .filter(recipe => this.categoryIsSelected(recipe.category))
      .filter(recipe => recipe.ingredients.some(ingredient => this.containsSearchString(ingredient)))
      .map(recipe => Object.create({
        id: recipe.id,
        name: recipe.name,
        relevantIngredients: recipe.ingredients.filter(ingredient => this.containsSearchString(ingredient))
      }));

    return React.createElement('div', {},
      React.createElement(SearchHeader, {
        filter_btn_click: () => this.toggleMenuVisibility(),
        updateSearchString: this.updateSearchString,
        searchString: this.state.searchString
      }),
      React.createElement(Menu, {
        visible: this.state.showMenu,
        backClick: () => this.toggleMenuVisibility(),
        categories: this.state.categories,
        checkedCategories: this.state.checkedCategories,
        onChange: (i) => this.updateCategorySelections(i)
      }),
      React.createElement(AddButton),
      React.createElement('main', {},
        React.createElement(CardGrid, { recipeDetails: recipeSearchResults }),
        React.createElement('h5', {}, 'Recipes with ' + this.state.searchString + ' as an ingredient'),
        React.createElement(CardGrid, { recipeDetails: ingredientSearchResults })
      )
    );
  }

}

export default Cookbook;
