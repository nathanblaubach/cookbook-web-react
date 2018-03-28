import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Cookbook from './Cookbook/Cookbook';
import Recipe from './Recipe/Recipe';

const App = () => (
  <Switch>
    <Route exact path='/' component={Cookbook}/>
    <Route path='/recipe/:number' component={Recipe}/>
  </Switch>
)

export default App;