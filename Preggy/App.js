import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import preggyService from './services/preggyService';
import SetupUser from './components/SetupUser';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import Home from './components/Home';
import LogIn from './components/LogIn';


const MainNavigator = createStackNavigator({
  Home: Home,
  LogIn: LogIn,
  },
  {initialRouteName: 'Home'}
);

const AppContainer = createAppContainer(MainNavigator);

//export default App;

export default class App extends Component {
  render() {
    return (
      <AppContainer />
    )
  }
}

