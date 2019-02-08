import React, {Component} from 'react';

export default class UsersList extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }
  componentDidMount(){
    this.loadUsers();
  }
  loadUsers(){
    fetch('api/getUsers')
    .then(data => data.json())
    .then(res => this.setState({data: res.data}))
    .catch(err => console.log(err));
  }
  render(){
    const users = this.state.data.map((user,index) => {
      return (
      <li key={`user_00_${index}`}>{"ID:"+user.id+" @"+user.username+"   email:"+user.email}</li>
      )
    });
    console.log(users);
    
    return(
      <ul>
        {users}
      </ul>
    )

  }
}