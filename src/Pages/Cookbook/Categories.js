import React from 'react';
import { LeftArrow } from '../../Resources/Icons.js';

function Category(props) {
  return (
    <div>
      <input type="checkbox" checked={props.checked} id={props.id} onChange={props.onChange} />
      <label htmlFor={props.id}>{props.name}</label>
    </div>
  );
}

function Categories(props) {
  return !props.visible ? <div></div> : (
    <div className="sidebar">
      <span onClick={props.backClick}>
        <LeftArrow />
      </span>
      <div className="sidebar-content">
        <h1>Recipes For:</h1>
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
    </div>
  );
}

export default Categories;
