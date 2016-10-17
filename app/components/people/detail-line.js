import React, {Component} from 'react' 

class UserDetailLine extends Component{

  componentWillMount = () => {
    console.log('UserDetailLine componentWillMount');
  }

  componentDidMount = () => {
    console.log('UserDetailLine componentDidMount');
  }

  componentWillUnmount = () => {
    console.log('UserDetailLine componentWillUnmount');
  }

  callSelectedUser = () => {
    if (typeof this.props.onSelected === 'function') {
      this.props.onSelected(this.props.user);
    }
  }

  render(){
      return(  
        <li onClick={this.callSelectedUser.bind(this)}>{this.props.user.name}</li>
      );
  }
  
} 

export default UserDetailLine;