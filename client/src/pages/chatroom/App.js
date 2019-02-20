import React , {Component} from 'react';
import PropTypes from 'prop-types';
import users, {messages} from './data';
const avatar = require('../../assets/avatars/01.jpg');

class UserSearch extends Component{
  state = {
    isCicked : false
  }
  handleSearchClick= (e) => {
    e.preventDefault();
    this.setState({
      isCicked: !this.state.isCicked
    })
  }
  render(){
    let classNames = this.state.isCicked ? '' : 'hidden';
    let classNamesIcon = classNames == '' ? 'fa fa-close' : 'fa fa-search';
    classNames += " user-search py-2";
    return(
      <React.Fragment>
        <a className="search-icon" onClick={this.handleSearchClick} href="#dosomething">
          <i className={classNamesIcon}></i>
        </a>
        <div className={classNames}>
        <div className="input-group ">
            <input type="text" name="searchUser" placeholder="input a @username" className="form-control form-control-sm bg-dark text-light"/>
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
    const avatar = require('../../assets/avatars/'+this.props.id+'.jpg');
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
class UserList extends Component{
  state = users;
  

  render(){
    const users = this.state.users.map(user => {
      
      if(!user.isActive){
        return (
          <User key={user.id}
                id={user.id}
                username ={user.username}
                avatar = {user.avatar}
          />
        )

      }
    })
    return(
        <React.Fragment>
          <UserSearch />
          {users}
        </React.Fragment>
    )
  }
}
/* --------------------------------------------USERS COMPONENTS--------------------------------------------------- */
class MessageForm extends Component{
  state = {
    message: null
  }
  render(){
    return (
      <form className="form-inline w-100">
        <div className="form-inner">
          <textarea  name="message" className=" form-control-lg input-msg "/>
          <button type="submit" className="btn btn-outline-dark btn-block btn-send">
            <i className="fa fa-send"></i>
          </button>
        </div>
      </form>
    );
  }
}
class Thread extends Component{
  
  render(){
    // const avatar = require('../assets/avatars/' + this.props.id + '.jpg');
    return (
      <div className={"message py-1 "+this.props.className}>
        
        <span >
          <p className="span">
           {this.props.text}
          </p>
        </span>
      </div>
    );
  }
}
class MessagesList extends Component{
  static contextTypes = {
    messages: PropTypes.array
  }
  render(){
      // TODO: get the clicked username and the host 
      const clickedUsername = 'jack_black';
      const currentUser = 'the_user';
      console.log(this.context.messagesList);
      
      const messages = this.context.messages.map(msg => {
    
      if(msg.guest === clickedUsername){
         return (<Thread
       key = {msg.id}
       id = {msg.id}
       text = {msg.text}
       className = "to-user"
        />)
       }else{
         return (
           <Thread
       key = {msg.id}
       id = {msg.id}
       text = {msg.text}
       className = "current-user text-right"
        />
         )
       }
  })
  return (
    messages
  );
  }
}
class ThreadsList extends Component{
  state = {messages:[]};
  componentDidMount() {
    this.setState({
      messages: messages
    })
  }
  //* using propTypes

  static propTypes = {
    messages: PropTypes.array
  }
  //*  lest use Context is this bitch
  //first we define getChildContextTypes
  static childContextTypes = {
    messages: PropTypes.array
  }
  getChildContext(){
    return {
      messages: this.state.messages
    }
  }

  render(){

    return(
      <MessagesList />
    );
  }
}
class ChatThread extends Component{
 
  render(){
 
    return(
      <React.Fragment>
        <div className="h1 border-bottom border-dark  col-sm-10 chatthread-header text-muted bg-dark">
           {/* TODO: add avatar also : when i click on the user from the lest i get his username and his avatar*/}
          <a href="#user" className="">
             <span className="active-chat-avatar-img">
              <img src={avatar} alt="avatar" className="rounded" />
            </span>
            {'jack_black'}

          </a> 
        </div>
        <div className=" messages-list px-2 m-0 mt-5">
          <ThreadsList />
        </div>
        <MessageForm  className="messages-form"/>
      </React.Fragment>
    );
  }
}

/* --------------------------------------------MESSAGES COMPONENTS--------------------------------------------------- */

export default class App extends Component {
  render(){
    
    return(
      <div className="p-0 m-0 messages-app" >
        <div className="grid ">
          <div className="row m-0">
          <div className="col-3 col-sm-2 col-md-2 p-0 ">
            <div className="h-100 bg-dark py-2">
            <div className="users-list col-3 col-sm-2 px-1">
              <UserList />
            </div>
            </div>
          </div>
          <div className="col-9 col-sm-10 col-md-10 py-1 px-0 messages-container  ">
              <ChatThread />
          </div>
          </div>
        </div>
      </div>
    )
  }
}
