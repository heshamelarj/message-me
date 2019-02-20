import React , {Component} from 'react';
import PropTypes from 'prop-types';
import SignUp from './Register';
import {Route, Link} from 'react-router-dom';

/*------------------------------------------------------------- Sign Up -------------------------------------------------- */
//create the signup route 
class SignupLink extends Component {
  constructor(props){
    super(props);
    this.state = {
      isClicked: false
    }
  }
  handleLinkClick = () => {
    
    this.props.signUpClicked(false);
    this.setState({
      isClicked: true
    })
  
  }
  hideLink = () => {
    let classes = ['text-muted'];
    if(this.state.isClicked){
        classes.push('hide');
      }
      return classes;
    }
  render(){
    let cssClasses = this.hideLink();
    cssClasses = cssClasses.join(' ').toString();
    return(
      
      <React.Fragment>
          <div className={cssClasses} >
            <p onClick={this.handleLinkClick}>or you can <Link to="/signup" className="text-success"  > Sign Up</Link> !</p>
          </div>
          <Route path="/signup" component={SignUp}/>
         
        </React.Fragment>
  );
}
}
class LoginFormInner extends Component{
  render(){
    let arr = this.props.cssClasses();
   let cssClasses = arr.join(' ').toString();

    return(
      <div className={cssClasses} >
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
      password: ""
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
  toggleLoginForm = () => {
    let classes = ['grid p-0 m-0 bg-light'];
    if(!this.props.isActive){
      classes.push('hide');
    }
    return classes;
  }

  render() {
    return (
      <React.Fragment>
        <LoginFormInner cssClasses={this.toggleLoginForm}/>
        <SignupLink  signUpClicked={this.props.toggleLoginForm}/>
      </React.Fragment>
    );
  }
}

class Login extends Component{
  state = {
    success: false,
    isActive: true
  };
  toggleLoginForm =(val) => {
    console.log("!!!!!!!!!!!!!!!!!!!!!");
    this.setState({isActive: val});
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
    return(
      <React.Fragment>
        <LoginForm onClick={this.buttonLoginClick} isActive={this.state.isActive} toggleLoginForm={this.toggleLoginForm}/>
        
      </React.Fragment>

    );
  }
}

/*------------------------------------------------------------- Login -------------------------------------------------- */

export default Login;