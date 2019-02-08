import React , {Component} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
class SignUpForm extends Component{
  render(){
    return(
      <div className="grid p-0 m-0 bg-light">
        <div className="row p-0 m-0">
          <div className="ml-auto col-md-6 col-10 mr-auto">
              <h1 className="text-center border-dark">Sign up</h1>
              <div className="input-group">
                <i className="input-group-text bg-dark text-light  mb-4">
                  email
                </i>
                <input type="email" placeholder="jhondoe@gmail.com" className="form-control"/>  
              </div>
               <div className="input-group">
                <i className="input-group-text bg-dark text-light  mb-4">
                  password
                </i>
                <input type="password" placeholder="" className="form-control"/>  
              </div>
               <div className="input-group">
                <i className="input-group-text bg-dark text-light  mb-4">
                  validate password
                </i>
                <input type="password" className="form-control"/>  
              </div>
              <div className="">
                <button className="btn btn-outline-success btn-block">Signup</button>
                <button className="btn btn-outline-secondary btn-block">Cancel</button>
              </div>
              {/* Already has an account */}
              <div className="text-muted">
                <p>or you can <a href="#login" className="text-success">login</a> !</p>
              </div>
          </div>
        </div>
      </div>
    );
  }
}
class SignUp extends Component{
  render(){
    return(
      <SignUpForm />
    );
  }
}
/*------------------------------------------------------------- Sign Up -------------------------------------------------- */
//create the signup route 
const SignupLink = (props) => {
  return(
      <Router>
        <React.Fragment>
          <div className="text-muted">
            <p>or you can <Link to="/signup" className="text-success" onClick={!this.props.isActive}> Sign Up</Link> !</p>
          </div>
          <Route path="/signup" component={SignUp}/>
        </React.Fragment>
      </Router>
  );
}
class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
      isActive: true
    }

  }
  handleEmail = (event) => {
    this.setState({
      email: event.target.value !== "" ? event.target.value : ""
    })
  }
   handlePassword = (event) => {
     this.setState({
       password: event.target.value !== "" ? event.target.value : ""
     })
   }
  handleLogin = () => {
    const email = this.state.email;
    const password = this.state.password;
    this.props.onClick({'email': email,'password': password});
  }
  handleSignup = () => {
    this.setState({
      isActive: false
    })
  }
  handleActive = (isActive) => {
    let classes = ["grid p-0 m-0 bg-light"];
    console.log(isActive);
    
    if(!isActive) classes.push('hide');
    return classes;
  }
  render() {
    return (
      <div className={this.handleActive(this.state.isActive).join(",")} >
        <div className="row p-0 m-0">
          <div className="ml-auto col-md-6 col-10 mr-auto">
              <h1 className="text-center border-dark">Login</h1>
              <div className="input-group">
                <i className="input-group-text bg-dark text-light  mb-4">
                  email
                </i>
                <input type="email" placeholder="jhondoe@gmail.com" className="form-control" onChange={this.handleEmail}/>  
              </div>
               <div className="input-group">
                <i className="input-group-text bg-dark text-light  mb-4">
                  password
                </i>
                <input type="password" placeholder="" className="form-control" onChange={this.handlePassword}/>  
              </div>
              <div className="">
                <button className="btn btn-outline-success btn-block" onClick={this.handleLogin}>Login</button>
                <button className="btn btn-outline-secondary btn-block">Cancel</button>
              </div>
              <SignupLink onClick={this.handleSignup}/>
          </div>
        </div>
      </div>
    );
  }
}

class Login extends Component{
  state = {
    success: false
  };
  buttonLoginClick(data){ 
    console.log(data);
    
    fetch('/api/users/login',{
      method: "POST",
      body: JSON.stringify(data),
      headers: {"Content-Type": "application/json"}
    })
    .then(res => {console.log(res)})
    .catch((err) => {throw err});
  }
  render(){
    return(
      <LoginForm onClick={this.buttonLoginClick}/>
    );
  }
}
/*------------------------------------------------------------- Login -------------------------------------------------- */

export default class Auth extends Component{
  render(){
    return(
      // <SignUp />
      <Login />
    );
  }
}