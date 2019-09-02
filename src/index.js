// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

// My code
import RecipeSearch from './pages/RecipeSearch';
import RecipeView   from './pages/RecipeView';
import RecipeAdd    from './pages/RecipeAdd';
import About        from './pages/About';
import                   './index.css';

ReactDOM.render(
  React.createElement(BrowserRouter, {},
    React.createElement(Switch, {},
      React.createElement(Route, {component: RecipeSearch, path:'/', exact:true }),
      React.createElement(Route, {component: RecipeView,   path:'/recipe/view/:number'}),
      React.createElement(Route, {component: RecipeAdd,    path:'/recipe/add'}),
      React.createElement(Route, {component: About,        path:'/about'})
    )
  ),
  document.getElementById('root')
);

registerServiceWorker();
