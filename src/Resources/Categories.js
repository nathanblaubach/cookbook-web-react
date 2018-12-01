import React    from 'react';
import { Menu } from './Icons';

function Categories(props) {
  return !props.visible ? <div></div> : (
    <div className="sidebar">
      <span onClick={props.backClick}><Menu /></span>
      <div className="sidebar-content">
        <h3>Recipes For</h3>
        <div>
          {
            props.categories.map(category =>
              <div key={category.key} style={{marginBottom: '.5rem'}}>
                <input type="checkbox" checked={props.checkedCategories.includes(category.key)} id={category.key} onChange={() => props.onChange(category.key)} />
                <label htmlFor={category.key}>{category.name}</label>
              </div>
            )
          }
        </div>
        <hr style={{border: 'none', height: '1px', backgroundColor: 'white'}} />
        <a href='https://blaubachn.gitlab.io/cookbook.html'><p>About</p></a>
      </div>
    </div>
  );
}

export default Categories;