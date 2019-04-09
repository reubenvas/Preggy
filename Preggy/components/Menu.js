import React, { Component } from 'react';
import { Drawer } from 'native-base';
import SideBar from './Sidebar';

export default class DrawerExample extends Component {
  closeDrawer = () => {
    this.drawer._root.close()
  };

  openDrawer = () => { this.drawer._root.open() };

render() { 
        return ( 
        <Drawer ref={(ref) => { this.drawer = ref; }} 
        content={<SideBar navigator={this.navigator} />} 
        onClose={() => this.closeDrawer()}>
            {/* screen content goes here.. */}
        </Drawer> 
        ); 
    } 
}
