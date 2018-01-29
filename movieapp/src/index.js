import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import Axios from 'axios'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
