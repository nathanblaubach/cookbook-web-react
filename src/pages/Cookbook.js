import React            from 'react';
import { Link }         from 'react-router-dom';
import { SearchHeader } from '../components/Headers';
import Menu             from '../components/Menu';
import Card             from '../components/Card';
import { DataStore }    from '../repositories/DataStore';

class Cookbook extends React.Component {
  constructor(props) {
    super(props);
    const dataStore = new DataStore();
    this.state = {
      categories: dataStore.getCategories(),
      recipes: dataStore.getRecipes(),
      links: dataStore.getLinks(),
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

  updateSearchString(event) {
    this.setState({ searchString: event.target.value });
  }

  handleCategorySelectionChange(i) {
    const updatedCategories = this.state.checkedCategories.includes(i)
      ? this.state.checkedCategories.filter(cat => cat !== i)
      : this.state.checkedCategories.concat(i);
    this.setState({
      checkedCategories: updatedCategories,
    });
  }

  searchStringContains(checkString) {
    return checkString.toUpperCase().includes(this.state.searchString.toUpperCase())
  }
  
  searchStringIsEmpty() {
    return this.state.searchString === ""
  }

  getFilteredRecipeResults() {
    const recipeMatchesSearchTerm = recipe => this.searchStringContains(recipe.name);

    const recipeCategoryIsSelected = recipe => 
      this.state.checkedCategories.includes(recipe.category) ||
      this.state.checkedCategories.length === 0;

    return this.state.recipes.filter(recipeMatchesSearchTerm)
                             .filter(recipeCategoryIsSelected)
                             .map(recipe => Object.create({
                               id: recipe.id,
                               name: recipe.name,
                               relevantIngredients: []
                             }));
  }

  getFilteredIngredientResults() {
    const ingredientMatchesSearchTerm = ingredient => !this.searchStringIsEmpty() && this.searchStringContains(ingredient);
    const recipeIngredientMatchesSearchTerm = recipe => recipe.ingredients.some(ingredientMatchesSearchTerm);

    const recipeCategoryIsSelected = recipe => 
      this.state.checkedCategories.includes(recipe.category) || 
      this.state.checkedCategories.length === 0;

    return this.state.recipes.filter(recipeIngredientMatchesSearchTerm)
                             .filter(recipeCategoryIsSelected)
                             .map(recipe => Object.create({
                               id: recipe.id,
                               name: recipe.name,
                               relevantIngredients: recipe.ingredients.filter(ingredientMatchesSearchTerm)
                             }));
  }

  render() {
    return (
      <div>

        <SearchHeader 
          filter_btn_click={() => this.toggleMenuVisibility()}
          menu_btn_click={() => this.toggleMenuVisibility()}
          searchString={this.state.searchString}
          updateSearchString={this.updateSearchString}
        />

        <Menu
          visible={this.state.showMenu}
          backClick={() => this.toggleMenuVisibility()}
          categories={this.state.categories}
          checkedCategories={this.state.checkedCategories}
          onChange={(i) => this.handleCategorySelectionChange(i)}
          links={this.state.links}
        />

        <Link to={'/recipeAdd'}>
          <img className={'add-button'} src={require("../images/plus.svg")} alt={"Add Recipe"} />
        </Link>

        <main>
          <div className="grid">
            {
              this.getFilteredRecipeResults().map(recipe => 
                <Link key={recipe.id} to={'/recipeView/' + recipe.id}>
                  <Card title={recipe.name} relevantIngredients={recipe.relevantIngredients} />
                </Link>
              )
            }
          </div>
          <h5>Recipes with "{this.state.searchString}" as an ingredient</h5>
          <div className="grid">
            {
              this.getFilteredIngredientResults().map(recipe => 
                <Link key={recipe.id} to={'/recipeView/' + recipe.id}>
                  <Card title={recipe.name} relevantIngredients={recipe.relevantIngredients} />
                </Link>
              )
            }
          </div>
        </main>

      </div>
    );
  }
}

export default Cookbook;
