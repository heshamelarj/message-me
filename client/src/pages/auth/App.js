import React , {Component} from 'react';
import Login from './Login';
import SignUp from './Register';
import {Route} from 'react-router-dom';



// export const SignupContext = React.createContext();
export default class Auth extends Component{
  state = {
    login: true,
    signup: false
  };
  handleSignupLink = () => {
    this.setState({
      signup: true,
      login:false
    })
  };
  render(){
    return(
        <React.Fragment>
          <Route path="/auth/signup" component={SignUp}/>
          <Route  exact path="/auth/login"  component={Login}/>
        </React.Fragment>

    )
  
  }
}