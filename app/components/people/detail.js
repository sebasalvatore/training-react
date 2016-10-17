import React, {Component} from 'react' 
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';

class UserDetail extends Component{

  callDeleteUser = (id) => {
    if (typeof this.props.onDeleteUser === 'function') {
      this.props.onDeleteUser(id);
    }
  }

  componentWillMount = () => {
    console.log('UserDetail componentWillMount');
  }

  componentDidMount = () => {
    console.log('UserDetail componentDidMount');
  }

  componentWillUnmount = () => {
    console.log('UserDetail componentWillUnmount');
  }

  componentWillUpdate = () => {
    console.log('UserDetail componentWillUpdate');
  }

  componentDidUpdate = () => {
    console.log('UserDetail componentDidUpdate');
  }

  render(){
      const iconStyles = {
        marginRight: 24
      };
      return(  
          <div> 
              <Divider />
              <br/>
              <div>ID: {this.props.user.id}</div>

              <FontIcon
                className="muidocs-icon-action-home"
                style={iconStyles}
                color={blue500}
              />
              <div>Name: {this.props.user.name}</div>

              <FontIcon
                className="muidocs-icon-action-home"
                style={iconStyles}
                color={red500}
                hoverColor={greenA200}
              />
              <div>Address: {this.props.user.address}</div>
              <br/>
              <Divider />
              <FlatButton label="Delete this person" secondary={true} onClick={this.callDeleteUser.bind(this, this.props.user.id)}  />
          </div> 
      );
  }
  
} 

export default UserDetail;