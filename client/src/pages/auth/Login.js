import React , {Component} from 'react';
import PropTypes from 'prop-types';
import SignUp from './Register';
import {Route, Link} from 'react-router-dom';


//create the signup route 
class SignupLink extends Component {
  state = {
    isClicked: false
  }
  handleSignupLinkClick = () => {
    this.setState({
      isClicked: true
    })
  }
  render(){
    let cssClasses = 'text-muted'
    return(
      <React.Fragment>
          <div className={cssClasses} >
            <p >or you can <Link to="/signup" className="text-success" onClick={this.handleSignupLinkClick} > Sign Up</Link> !</p>
          </div>
          <Route path="/signup" component={SignUp}/>  
         
        </React.Fragment>
  );
}
}
class LoginFormInner extends Component{
  render(){
    return(
      <div className='grid p-0 m-0 bg-light' >
          <div className="row p-0 m-0">
            <div className="ml-auto col-md-6 col-10 mr-auto">
                <h1 className="text-center border-dark">Login</h1>
                <div className="input-group">
                  <i className="input-group-text bg-dark text-light  mb-4">
                    email
                  </i>
                  <input type="email" placeholder="jhondoe@gmail.com" className="form-control" onChange={this.props.handleEmail}/>  
                </div>
                <div className="input-group">
                  <i className="input-group-text bg-dark text-light  mb-4">
                    password
                  </i>
                  <input type="password" placeholder="" className="form-control" onChange={this.props.handlePassword}/>  
                </div>
                <div className="">
                  <button className="btn btn-outline-success btn-block" onClick={this.props.handleLogin}>Login</button>
                  <button className="btn btn-outline-secondary btn-block">Cancel</button>
                  <SignupLink />
                </div>
            </div>
          </div>
        </div>
    )
  }
}
class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
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

    
    
    this.props.handleLoginClick({
      'email': email,
      'password': password
    });
  }
  render() {
      return(
        <LoginFormInner handleLogin={this.handleLogin} handleEmail={this.handleEmail} handlePassword={this.handlePassword}/>
      )
  }
}

class Login extends Component{
  state = {
    isSignupLinkClicked: false
  }
 
  buttonLoginClick= (data) =>{ 
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
     return (
     <LoginForm  handleLoginClick={this.buttonLoginClick} />
     )  
  }
}



export default Login;