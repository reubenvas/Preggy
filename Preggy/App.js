import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import { Header, Container, Button, Text } from 'native-base';

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
  { initialRouteName: 'Home' } // CHANGE ME BACK!
);

const AppContainer = createAppContainer(MainNavigator);

export default class App extends Component {
  render() {
    return (
      <AppContainer />
    )
  }
}

