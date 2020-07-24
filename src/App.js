import React, { Component } from 'react';
import ToolBar from './components/Toolbar'
import {SideDrawer, BackDrop} from './components/SideDrawer'
import Card from './components/Card'

class App extends Component {
  state = {
    sideDrawerOpen: false
  }

  toggleButtonClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    });
  };

  render() {
    let backDrop;
    let sideDrawer;
    var rows = [];

    for (var i = 0; i < 10; i += 1) {
      rows.push(<Card />)
    }

    if (this.state.sideDrawerOpen) {
      backDrop = <BackDrop onClickHandler={this.toggleButtonClickHandler}/>
    } 
    sideDrawer = <SideDrawer show={this.state.sideDrawerOpen}/>
    return ( 
      <div style={{height:'100%'}}>
        <ToolBar drawerClickHandler={this.toggleButtonClickHandler}/>
        {rows}
        {backDrop}
        {sideDrawer}
      </div>
    );
  }
}

export default App;