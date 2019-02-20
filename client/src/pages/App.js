import React , {Component} from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Link
} from 'react-router-dom';
import Login from './auth/Login';
import Register from './auth/Register'
export default class App extends Component{
  render(){
    return(
      <React.Fragment>
        <Login />
      </React.Fragment>
    )
  }
}