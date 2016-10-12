/*jshint smarttabs:false */
/*
In this class we learn how to create a component that use another component (in this case AppBar component from material-ui)
*/

import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
 
class Header extends Component{
  render(){
    return(
      <AppBar title="Welcome to Sovos ReactJS training!" />
    );
  }
}

export default Header;