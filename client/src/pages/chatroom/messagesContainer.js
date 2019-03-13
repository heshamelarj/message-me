import React , {Component} from 'react';
import PropTypes from 'prop-types';
import users, {messages} from '../data/seed';
const avatar = require('../../assets/avatars/01.jpg');

/* --------------------------------MESSAGESCONTAINER's COMPONENTS---------------------------------------- */
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
export default class MessagesContainer extends Component{
 
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




