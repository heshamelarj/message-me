import React , {Component} from 'react';
import Login from './Login';
import SignUp from './Register';
import ChatApp from '../chatroom/app';
import {Route} from 'react-router-dom';
// export const SignupContext = React.createContext();
export default class Auth extends Component{
  state = {
    isAuthenticated: false
  }
  handleAuthentication = (status) => {
    this.setState({
      isAuthenticated: status
    })
  }
  render(){
    return(
        <React.Fragment>
          <Route path="/auth/signup" component={SignUp}/>
          <Route  exact path="/auth/login" isAuthenticated={this.handleAuthentication}  component={Login}/>
          <Route exact path="/" component={ChatApp} />
        </React.Fragment>

    )
  
  }
}