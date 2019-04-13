import React    from 'react';
import { Filter } from './Icons';

function Menu(props) {
  return !props.visible ? <div></div> : (
    <div className="sidebar sidebar-left">
      <span onClick={props.backClick}><Filter /></span>
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
          <hr style={{border: 'none', height: '1px', backgroundColor: 'white'}} />
          {
            props.links.map(link =>
              <a href={link.url}><p>{link.description}</p></a>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default Menu;
