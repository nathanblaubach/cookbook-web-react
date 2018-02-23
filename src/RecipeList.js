import React from 'react';

class RecipeCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe : props.value,
    }
  }
  render() {
    return (
      <div className="col-md-3">
        <div className="card">
          <img className="card-img-top" src="http://via.placeholder.com/350x250" alt="placeholder" />
          <div className="card-block">
            <h3 className="card-title">{this.state.recipe}</h3>
            <p className="card-text">This recipe is so great that it will change your life. You haven't lived until you've tried it!</p>
          </div>
        </div>
      </div>
    );
  }
}

class RecipeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes : props.value,
    };
  }

  renderRecipeCard(recipe) {
    return (
      <RecipeCard value={recipe} />
    );
  }

  render() {
    return (
      <div className="row">
        {this.state.recipes.map(recipe => this.renderRecipeCard(recipe))}
      </div>
    );
  }
}

export default RecipeList;
