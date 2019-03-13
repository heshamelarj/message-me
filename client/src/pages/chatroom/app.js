import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserList from './userList';
import MessagesContainer from './messagesContainer';
export default class ChatApp extends Component {
  render() {
    return (
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
              <MessagesContainer />
            </div>
          </div>
        </div>
      </div>
    )
  }
}