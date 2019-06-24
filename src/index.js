// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

// My code
import Cookbook     from './pages/Cookbook';
import RecipeView   from './pages/RecipeView';
import RecipeEdit   from './pages/RecipeEdit';
import RecipeAdd    from './pages/RecipeAdd';
import                   './index.css';

ReactDOM.render(
  (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'             component={Cookbook}    />
        <Route path='/recipeView/:number' component={RecipeView}  />
        <Route path='/recipeEdit/:number' component={RecipeEdit}  />
        <Route path='/recipeAdd'          component={RecipeAdd}   />
      </Switch>
    </BrowserRouter>
  ), 
  document.getElementById('root')
);

registerServiceWorker();
