import React from 'react';
import { ArrowLeft } from 'react-feather';

function Category(props) {
  return (
    <div>
      <input type="checkbox" checked={props.checked} id={props.id} onChange={props.onChange} />
      <label htmlFor={props.id}>{props.name}</label>
    </div>
  );
}

function Categories(props) {
  if (!props.visible) {
    return(<div></div>);
  } else {
    return (
      <div className="sidebar-modal">
        <ArrowLeft className="icon" onClick={props.backClick}/>
        <h2>Recipes For:</h2>
        <div>
          {props.categories.map(category => 
            <Category 
              key={category.key}
              id={category.key}
              name={category.name}
              checked={props.checkedCategories.includes(category.key)}
              onChange={() => props.onChange(category.key)}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Categories;
