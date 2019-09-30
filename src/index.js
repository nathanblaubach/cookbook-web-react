// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

// My code
import Search     from './pages/search';
import RecipeView from './pages/recipe/view';
import RecipeAdd  from './pages/recipe/add';
import About      from './pages/about';
import                 './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route component={Search}     path={"/"} exact={true} />
      <Route component={RecipeView} path={"/recipe/view/:number"} />
      <Route component={RecipeAdd}  path={"/recipe/add"} />
      <Route component={About}      path={"/about"} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();
