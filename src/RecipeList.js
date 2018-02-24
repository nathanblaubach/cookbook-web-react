import React from 'react';

function RecipeCard(props) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-12 Cookbook-recipeCard">
      <div className="card">
        <div className="card-block">
          <h3 className="card-title">{props.value}</h3>
          <p className="card-text">This recipe is so great that it will change your life. You haven't lived until you've tried it!</p>
        </div>
      </div>
    </div>
  );
}

class RecipeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes : props.value,
    };
  }

  render() {
    return (
      <div className="row Cookbook-recipes">
        {this.state.recipes.map(recipe => <RecipeCard value={recipe} />)}
      </div>
    );
  }
}

export default RecipeList;
