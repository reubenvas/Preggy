import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Welcome from './components/setup/Welcome';
import LogIn from './components/setup/LogIn';
import Relation from './components/setup/Relation';
import EnterName from './components/setup/EnterName';
import SetupDueDate from './components/setup/SetupDueDate';
import SetupPeriod from './components/setup/SetupPeriod';
import Home from './components/Home';
import WeekInfo from './components/WeekInfo';

const MainNavigator = createStackNavigator({
  Welcome,
  LogIn,
  EnterName,
  Relation,
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

