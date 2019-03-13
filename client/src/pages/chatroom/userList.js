import React, { Component } from 'react';
import PropTypes from 'prop-types';
import users, { messages } from '../data/seed';
const avatar = require('../../assets/avatars/01.jpg');
/* --------------------------USERLIST COMPONENTS---------------------------- */
class UserSearch extends Component {
  state = {
    isCicked: false
  }
  handleSearchClick = (e) => {
    e.preventDefault();
    this.setState({
      isCicked: !this.state.isCicked
    })
  }
  render() {
    let classNames = this.state.isCicked ? '' : 'hidden';
    let classNamesIcon = classNames == '' ? 'fa fa-close' : 'fa fa-search';
    classNames += " user-search py-2";
    return (
      <React.Fragment>
        <a className="search-icon" onClick={this.handleSearchClick} href="#dosomething">
          <i className={classNamesIcon}></i>
        </a>
        <div className={classNames}>
          <div className="input-group ">
            <input type="text" name="searchUser" placeholder="input a @username" className="form-control form-control-sm bg-dark text-light" />
            <a className="input-group-text inside-input-search-icon" href="#dosomehing">
              <i className="fa fa-search "></i>
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
class User extends Component {
  state = {
    messages: []
  };
  render() {
    const avatar = require('../../assets/avatars/' + this.props.id + '.jpg');
    return (
      <div className="py-3">
        <div className="bg-dark ">
          <div className="p-0 ">
            <a href="#something" className="form-control bg-dark border-0 h-25 user-anchor">
              <span className="card-img ">
                <img src={avatar} className="rounded" alt="avatar" />
              </span>
              <span className="card-text ml-auto text-light">
                {this.props.username}
              </span>
            </a>
          </div>
        </div>
      </div>
    )
  }
}
 class UserList extends Component {
  state = users;


  render() {
    const users = this.state.users.map(user => (
      !user.isActive  ? <User key={user.id} id={user.id} username={user.username} avatar={user.avatar}/> : false 
    ))
    console.log('users: ');
    console.log(users);
    
    return (
      <React.Fragment>
        <UserSearch />
        {users}
      </React.Fragment>
    )
  }
}
export default UserList;