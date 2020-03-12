import React          from 'react';
import { Link }       from 'react-router-dom';
import DataStore      from '../repositories/datastore';
import Header         from '../components/header';

const SearchResults = (props) => (
  <div className="cards">
    {
      props.recipeDetails.map(recipe =>
        <Link key={recipe.id} to={`/recipes/${recipe.id}`}>
          <div className="card">
            <h3>{recipe.name}</h3>
            {
              recipe.relevantIngredients.map((ingredient, i) =>
                <h5 key={i}>{ingredient}</h5>
              )
            }
          </div>
        </Link>
      )
    }
  </div>
);

class Search extends React.Component {
  constructor(props) {
    super(props);
    const dataStore = new DataStore();
    this.state = {
      recipes: dataStore.getRecipes(),
      categories: dataStore.getCategories(),
      checkedCategories: [],
      searchString: "",
      showCategories: false
    };
    this.toggleCategoryVisibility = this.toggleCategoryVisibility.bind(this);
    this.updateCategorySelections = this.updateCategorySelections.bind(this);
    this.categoryIsSelected = this.categoryIsSelected.bind(this);
    this.updateSearchString = this.updateSearchString.bind(this);
    this.containsSearchString = this.containsSearchString.bind(this);
  }
  
  toggleCategoryVisibility = () => this.setState({ showCategories: !this.state.showCategories });

  updateCategorySelections = (i) => this.setState({
    checkedCategories: this.state.checkedCategories.includes(i)
      ? this.state.checkedCategories.filter(cat => cat !== i)
      : this.state.checkedCategories.concat(i)
  });

  categoryIsSelected = (category_id) => this.state.checkedCategories.includes(category_id) || this.state.checkedCategories.length === 0;
  updateSearchString = (event) => this.setState({ searchString: event.target.value });
  containsSearchString = (checkString) => checkString.toUpperCase().includes(this.state.searchString.toUpperCase());

  recipeSearchResults = () => this.state.recipes
    .filter(recipe => this.categoryIsSelected(recipe.category))
    .filter(recipe => this.containsSearchString(recipe.name))
    .map(recipe => Object.create({
      id: recipe.id,
      name: recipe.name,
      relevantIngredients: []
    }));

  ingredientSearchResults = () => this.state.searchString.length < 2 ? [] : this.state.recipes
    .filter(recipe => this.categoryIsSelected(recipe.category))
    .filter(recipe => recipe.ingredients.some(ingredient => this.containsSearchString(ingredient)))
    .map(recipe => Object.create({
      id: recipe.id,
      name: recipe.name,
      relevantIngredients: recipe.ingredients.filter(ingredient => this.containsSearchString(ingredient))
    }));

  render = () => (
    <div>
      <Header />
      <main>

        <div className="searchCriteria">
          <img onClick={this.toggleCategoryVisibility} src={require("../images/filter.svg")} alt="filter" />
          <input className="searchBar" type="textbox" placeholder="Search" value={this.state.searchString} onChange={this.updateSearchString} />
          <div className="categories">
            {
              this.state.categories.filter(() => this.state.showCategories === true).map(category =>
                <div className="category" key={category.key} style={{marginBottom: '.5rem'}}>
                  <input
                    type="checkbox" 
                    id={category.key} 
                    checked={this.state.checkedCategories.includes(category.key)} 
                    onChange={() => this.updateCategorySelections(category.key)} 
                  />
                  <label onClick={() => this.updateCategorySelections(category.key)}>{category.name}</label>
                </div>
              )
            }
          </div>
        </div>

        <SearchResults recipeDetails={this.recipeSearchResults()} />
        <h5>{`Recipes with "${this.state.searchString}" as an ingredient`}</h5>
        <SearchResults recipeDetails={this.ingredientSearchResults()} />

      </main>
    </div>

  );
}

export default Search;
