import React from 'react';
import './Categories.css';

function Category(props) {
  return (
    <div className="form-check">
      <input type="checkbox" className="form-check-input" id={props.id} onChange={props.onChange} />
      <label className="form-check-label" htmlFor={props.id}>{props.name}</label>
    </div>
  );
}

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories : props.categories,
      onChange : props.onChange,
    };
  }
  render() {
    return (
      <div className="Categories">
        <h1>Recipes For:</h1>
        {this.state.categories.map(category => 
          <Category 
            key={category.key}
            id={category.key}
            name={category.name}
            onChange={() => this.state.onChange(category.key)}
          />
        )}
      </div>
    );
  }
}

export default Categories;
