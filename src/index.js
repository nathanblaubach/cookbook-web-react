// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

// My code
import Cookbook     from './pages/Cookbook';
import RecipeView   from './pages/RecipeView';
import RecipeAdd    from './pages/RecipeAdd';
import About        from './pages/About';
import                   './index.css';

ReactDOM.render(
  React.createElement(BrowserRouter, {},
    React.createElement(Switch, {},
      React.createElement(Route, {component: Cookbook,   path:'/', exact:true }),
      React.createElement(Route, {component: RecipeView, path:'/recipeView/:number'}),
      React.createElement(Route, {component: RecipeAdd,  path:'/recipeAdd'}),
      React.createElement(Route, {component: About,      path:'/about'})
    )
  ),
  document.getElementById('root')
);

registerServiceWorker();
