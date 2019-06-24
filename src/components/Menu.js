import React      from 'react';

function Menu(props) {
  return !props.visible ? <div></div> : (
    <div className="sidebar">
      <img onClick={props.backClick} src={require("../images/filter.svg")} alt="logo"/>
      <div className="sidebar-content">
        <h3>Recipes For</h3>
        {
          props.categories.map(category =>
            <div key={category.key} style={{marginBottom: '.5rem'}}>
              <input type="checkbox" checked={props.checkedCategories.includes(category.key)} id={category.key} onChange={() => props.onChange(category.key)} />
              <label htmlFor={category.key}>{category.name}</label>
            </div>
          )
        }
        <hr />
        {
          props.links.map(link =>
            <a href={link.url}><p>{link.description}</p></a>
          )
        }
      </div>
    </div>
  );
}

export default Menu;

