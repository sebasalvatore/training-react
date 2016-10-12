import React, {Component} from 'react' 
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';

class UserDetail extends Component{
    render(){
        const iconStyles = {
          marginRight: 24
        };

        return(  
            <div> 
                <Divider />
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
            </div> 
        );
    }
  
} 

export default UserDetail;