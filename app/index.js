import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/layout/Header';
import Content from './components/layout/Content';
 
const App = () => (
  <MuiThemeProvider>
  	<div>
      <Header />
      <Content />
  	</div>
  </MuiThemeProvider>
);
 
ReactDOM.render(
  <App />,
  document.getElementById('app')
);