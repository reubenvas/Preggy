import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import preggyService from './services/preggyService';
import SetupUser from './components/SetupUser';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Welcome from './components/Welcome';
import LogIn from './components/LogIn';
import EnterName from './components/EnterName';
import SetupDueDate from './components/SetupDueDate';
import SetupPeriod from './components/SetupPeriod';
import Home from './components/Home'

const MainNavigator = createStackNavigator({
  Welcome,
  LogIn,
  EnterName,
  SetupDueDate,
  SetupPeriod,
  Home,
},
  { initialRouteName: 'Welcome' }
);

const AppContainer = createAppContainer(MainNavigator);

export default class App extends Component {
  state = {
    name: '',
    relation: '',
    dueDate: '',
    currentWeek: '',
    timePregnant: ''
  }
  setPregDates = (pregnancyInfo) => {
    this.setState({ ...pregnancyInfo })
  }

  setName = name => {
    this.setState({ name })
  }

  setRelation = relation => {
    this.setState({ relation })
  }

  render() {
    return (
      <AppContainer />
    )
  }
}

