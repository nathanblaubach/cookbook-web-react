import React from 'react';
import ReactDOM from 'react-dom';
import Cookbook from './Cookbook';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Cookbook />, document.getElementById('root'));
registerServiceWorker();
