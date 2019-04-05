import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Welcome from './components/Welcome';
import LogIn from './components/LogIn';
import EnterName from './components/EnterName';
import SetupDueDate from './components/SetupDueDate';
import SetupPeriod from './components/SetupPeriod';
import Home from './components/Home';
import WeekInfo from './components/WeekInfo';

const MainNavigator = createStackNavigator({
  Welcome,
  LogIn,
  EnterName,
  SetupDueDate,
  SetupPeriod,
  Home,
  WeekInfo
},
  { initialRouteName: 'Welcome' }
);

const AppContainer = createAppContainer(MainNavigator);

export default class App extends Component {
  render() {
    return (
      <AppContainer />
    )
  }
}

