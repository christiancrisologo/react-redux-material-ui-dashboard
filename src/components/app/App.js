import React, { Component } from 'react'

import { deepOrange500 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../header/Header'
import SideNav from '../sidenav/SideNav'
// I added this
// import '../styles/styles.scss';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});



class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { drawerOpen: false };


  }

  leftDrawerToggle() {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  }

  render() {
    return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div className="main-wrap">
        <Header title="Dashboard" onLeftIconClick={this.leftDrawerToggle.bind(this)} />
        <SideNav open={this.state.drawerOpen}
          title="Randomize"
          toggleOpen={this.leftDrawerToggle.bind(this)} />
      </div>
    </MuiThemeProvider>
    )
  }
}


export default App;