import React from 'react';

function Filter(props) {
  return (
    <div className="form-check">
      <input type="checkbox" className="form-check-input" id={props.value} />
      <label className="form-check-label" for={props.value}>{props.value}</label>
    </div>
  );
}

class Filters extends React.Component {
  render() {
    const filters = [
      "Beverage",
      "Hors d'oeuvre",
      "Main Entree",
      "Salad",
      "Side Dish",
      "Soup",
      "Bread",
      "Breakfast",
      "Dessert",
      "Miscellaneous",
      "McClain Family Directory"
    ];

    return (
      <div className="Cookbook-filters">
        <h1>Recipes For:</h1>
        <hr />
        {filters.map(recipe => <Filter value={recipe} />)}
      </div>
    );
  }
}

export default Filters;
