import React , {Component} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Redirect, Route, Link} from 'react-router-dom';
import Login from './Login';
class LoginLink extends Component {
  constructor(props){
    super(props);
    this.state = {
      isActive: true
    }
  }
  handleClick = () => {
    this.props.oginClicked(false);
    this.setState({
      isActive: false
    })
  }
  hideLink = () => {
    let classes = ['text-muted'];
    if (this.state.isClicked) {
      classes.push('hide');
    }
    return classes;
  }
  render(){
     let cssClasses = this.hideLink();
     cssClasses = cssClasses.join(' ').toString();
      return(
        <React.Fragment>

          <div className={cssClasses}>
          <p>or you can <Link to="/" className="text-success">login</Link> !</p>
          </div>
          <Route path="/" component={Login}/>
        </React.Fragment>
    )
  }
}
class SignupFormInner extends Component{
  render(){
     let arr = this.props.cssClasses();
     let cssClasses = arr.join(' ').toString();
      return(
          <div className={cssClasses}>  
            <div className="row p-0 m-0">
              <div className="ml-auto col-md-6 col-10 mr-auto ">
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
                  
              </div>
            </div>
          </div>
    )
  }
}
class SignUpForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      user:{
        username: "",
        email: "",
        password: ""
      }
    }
  }

  handleEmail = (event) => {
 
  }
  handlePassword = (event) => {

  }
  handleSignup = () => {

  }
  toggleSignupForm = () => {
    let classes = ['grid p-0 m-0 bg-light'];
    if (!this.props.isActive) {
      classes.push('hide');
    }
    return classes;
  }
  render(){
    return(
     <React.Fragment>
       <SignupFormInner cssClasses={this.toggleSignupForm}/>
       <LoginLink loginClicked={this.props.toggleSignupForm}/>
     </React.Fragment>
    );
  }
}
class SignUp extends Component{
  constructor(props){
    super(props);
    this.state = {
      isActive: false
    }
  }
  render(){
    return(
      <SignUpForm />
    );
  }
}
export default SignUp;