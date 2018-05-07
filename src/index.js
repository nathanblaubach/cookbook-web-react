// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

// My code
import Header     from './Header';
import Cookbook   from './Pages/Cookbook/Cookbook';
import RecipeView from './Pages/Recipe/RecipeView';
import About      from './Pages/About/About';
import                 './index.css';

const links = [
  {
    "nav":"/", 
    "display":"Cookbook"
  },
  {
    "nav":"/about", 
    "display":"About"
  }
];

ReactDOM.render(
  (
    <BrowserRouter>
      <div>
        <Header links={links} />
        <div className="content">
          <Switch>
            <Route exact path='/' component={Cookbook}/>
            <Route path='/about' component={About}/>
            <Route path='/recipeView/:number' component={RecipeView}/>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  ), 
  document.getElementById('root')
);
registerServiceWorker();
