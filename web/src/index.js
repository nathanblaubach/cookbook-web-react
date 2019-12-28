// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

// My code
import Search     from './pages/search';
import RecipeView from './pages/recipes/view';
import RecipeAdd  from './pages/recipes/add';
import About      from './pages/about';
import                 './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route component={Search}     path={"/"} exact={true} />
      <Route component={Search}     path={"/recipes"} exact={true} />
      <Route component={RecipeAdd}  path={"/recipes/add"} />
      <Route component={RecipeView} path={"/recipes/:number"} />
      <Route component={About}      path={"/about"} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();
