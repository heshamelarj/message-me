import React , {Component} from 'react';
import PropTypes from 'prop-types';
import { Link} from 'react-router-dom';
const LoginLink = (props) => {
     let cssClasses = 'text-muted'
      return(
        <React.Fragment>
          <div className={cssClasses}>
          <p>or you can <Link to="/auth/login" className="text-success">login</Link> !</p>
          </div>
        </React.Fragment>
    )
  }
const SignupFormInner = (props) =>{
      return(
          <div className='grid p-0 m-0 bg-light'>  
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
                 <LoginLink />          
              </div>
            </div>
          </div>
    )
  }
class SignUpForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
        username: "",
        email: "",
        password: ""
      }
  }

  handleEmail = (event) => {
 
  }
  handlePassword = (event) => {

  }
  handleSignup = () => {

  }

  render(){
    return(
       <SignupFormInner />
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
export default SignUp;