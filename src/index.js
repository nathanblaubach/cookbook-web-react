// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

// My code
import Cookbook   from './Pages/Cookbook';
import RecipeView from './Pages/RecipeView';
import                 './index.css';

ReactDOM.render(
  (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Cookbook}/>
        <Route path='/recipeView/:number' component={RecipeView}/>
      </Switch>
    </BrowserRouter>
  ), 
  document.getElementById('root')
);

registerServiceWorker();
