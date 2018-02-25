import React from 'react';
import './Filters.css';

function Filter(props) {
  return (
    <div className="form-check">
      <input type="checkbox" className="form-check-input Filters-checkboxes" id={props.value} onChange={props.onChange} />
      <label className="form-check-label Filters-text" htmlFor={props.value}>{props.value}</label>
    </div>
  );
}

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters : props.filters,
      onChange : props.onChange,
    };
  }
  render() {
    return (
      <div className="Filters">
        <h1>Recipes For:</h1>
        {this.state.filters.map((recipe, i) => 
          <Filter 
            key={i} 
            value={recipe} 
            onChange={() => this.state.onChange()}
          />
        )}
      </div>
    );
  }
}

export default Filters;
