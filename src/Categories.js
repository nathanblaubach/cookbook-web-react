import React from 'react';

function Category(props) {
  return (
    <div>
      <input type="checkbox" id={props.id} onChange={props.onChange} />
      <label htmlFor={props.id}>{props.name}</label>
    </div>
  );
}

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories : props.categories,
      visible : props.visible,
      onChange : props.onChange,
    };
  }

  toggleCategoryVisible() {
    const flipped = !this.state.visible;
    this.setState({
      visible : flipped,
    });
  }

  render() {
    return (
      <div className="panel">
        <h2 onClick={() => this.toggleCategoryVisible()}>Categories</h2>
        <div>
          {this.state.categories.filter(category => this.state.visible).map(category => 
            <Category 
              key={category.key}
              id={category.key}
              name={category.name}
              onChange={() => this.state.onChange(category.key)}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Categories;
