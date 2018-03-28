import React from 'react';
import { ArrowLeft } from 'react-feather';

function Navigation(props) {
  if (!props.visible) {
    return(<div></div>);
  } else {
    return (
      <div className="sidebar-modal">
        <ArrowLeft className="icon" onClick={props.backClick} />
        <h2>The McClain Family Cookbook</h2>
        <h3>Add a recipe</h3>
        <h3>Help</h3>
        <h3>About</h3>
      </div>
    );
  }
}

export default Navigation;