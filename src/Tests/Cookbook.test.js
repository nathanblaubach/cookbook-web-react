import React from 'react';
import ReactDOM from 'react-dom';
import Cookbook from '../Pages/Cookbook';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Cookbook />, div);
  ReactDOM.unmountComponentAtNode(div);
});
