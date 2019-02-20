import React from 'react';
import ReactDOM from 'react-dom';
import  'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/font-awesome.css'
import './assets/css/App.css';
import App from './pages/App';
import {BrowserRouter as Router} from 'react-router-dom';

// import UsersList from './playArround/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
                <Router> 
                  <App /> 
                </Router>  ,
                 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
