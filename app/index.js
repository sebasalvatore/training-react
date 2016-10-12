import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/layout/Header';
import Content from './components/layout/Content';
import injectTapEventPlugin from 'react-tap-event-plugin';
 
injectTapEventPlugin();
 
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