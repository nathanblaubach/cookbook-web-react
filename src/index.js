import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Cookbook from './Cookbook';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Cookbook />, document.getElementById('root'));
registerServiceWorker();
