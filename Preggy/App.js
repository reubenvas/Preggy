import React, { Component } from 'react';
import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import { Text } from 'react-native';

import Welcome from './components/setup/Welcome';
import LogIn from './components/setup/LogIn';
import Relation from './components/setup/Relation';
import EnterName from './components/setup/EnterName';
import SetupDueDate from './components/setup/SetupDueDate';
import SetupPeriod from './components/setup/SetupPeriod';
import SideBar from './components/Sidebar';
import Home from './components/Home';
import WeekInfo from './components/WeekInfo';

const Setup = value => createStackNavigator({
  Welcome,
  LogIn,
  EnterName,
  Relation,
  SetupDueDate: { screen: props => <SetupDueDate {...props} {...value} /> },
  SetupPeriod: { screen: props => <SetupPeriod {...props} {...value} /> },
},
  { initialRouteName: 'Welcome', headerMode: 'none' }
);

const Menu = value => createDrawerNavigator({
  Home: { screen: props => <Home {...props} {...value} /> },
  WeekInfo,
},
  {
    initialRouteName: 'Home',
    contentComponent: SideBar,
  },
);


export default class App extends Component {
  state = {
    isSetup: false,
    change: () => {
      this.setState({ isSetup: true })
    },
    setPregInfo: (...pregData) => {
      this.setState( {...pregData[0] })
    },
    dueDate: '',
    currentWeek: '',
    timePregnant: '',
    tagLine: '',
    daysPassed: '',
    name: '',
    relation: '',
  }



  renderPages = (SetupStages, AppContainer) => {
    if (this.state.isSetup) {
      console.log('state:', this.state);
      
      return < AppContainer />;
    }
    return <SetupStages />;

  }

  render() {
    const SetupConfig = Setup(this.state);
    const SetupStages = createAppContainer(SetupConfig);

    const AppConfig = Menu(this.state);
    const AppContainer = createAppContainer(AppConfig);

    return (
      this.renderPages(SetupStages, AppContainer)
    )
  }
}

