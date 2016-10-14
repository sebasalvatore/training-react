/*jshint smarttabs:false */
/*
In this class we learn how to create a component that use another component (in this case AppBar component from material-ui)
*/

import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class Header extends Component{
  constructor(){
    super();
    this.state = {
      open: false
    };
  }

  toogleMenu(){
    this.setState({
      open: !this.state.open
    });
  }

  render(){
    return(
      <div>
        <AppBar 
          onLeftIconButtonTouchTap={ () => this.toogleMenu() }
          title="Welcome to Sovos ReactJS training!" 
        />
        <Drawer
          docked={ true }
          open={ this.state.open }
          width={ 250 }
          openSecondary={true}
        >
          <AppBar 
            title="Menu" 
            showMenuIconButton={false}
          />
          <MenuItem> Menu 1</MenuItem>
          <MenuItem> Menu 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default Header;