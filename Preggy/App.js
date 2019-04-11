import React, { Component } from 'react';
import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import { Spinner, Container } from 'native-base';
import asyncStorage from './handlers/asyncStorage';

import Welcome from './components/setup/Welcome';
import LogIn from './components/setup/LogIn';
import Relation from './components/setup/Relation';
import EnterName from './components/setup/EnterName';
import SetupDueDate from './components/setup/SetupDueDate';
import SetupPeriod from './components/setup/SetupPeriod';
import SideBar from './components/Sidebar';
import Home from './components/Home';
import WeekInfo from './components/WeekInfo';
import BlogFrame from './components/BlogFrame';
import Explore from './components/otherScreens/Explore';
import SavedArticles from './components/otherScreens/SavedArticles';
import Notifications from './components/otherScreens/Notifications';
import Themes from './components/otherScreens/Themes';
import Settings from './components/otherScreens/Settings';
import Support from './components/otherScreens/Support';

const Setup = value => createStackNavigator({
  Welcome,
  LogIn,
  EnterName,
  Relation,
  SetupDueDate: { screen: props => <SetupDueDate {...props} {...value} /> },
  SetupPeriod: { screen: props => <SetupPeriod {...props} {...value} /> },
},
  {
    initialRouteName: 'Welcome',
    headerMode: 'none'
  }
);

const Menu = value => createDrawerNavigator({
  Home: { screen: props => <Home {...props} {...value} /> },
  WeekInfo,
  Explore,
  SavedArticles,
  Notifications,
  Themes,
  Settings,
  Support,
  BlogFrame
},
  {
    initialRouteName: 'Home',
    contentComponent: SideBar,
  },
);

export default class App extends Component {
  state = {
    isLoading: true,
    isSetup: false,
    dueDate: '',
    currentWeek: '',
    timePregnant: '',
    tagLine: '',
    daysPassed: '',
    name: '',
    relation: '',
    setPregInfo: (...pregData) => {
      pregData = pregData[0];
      asyncStorage.storeObjAsync(pregData);
      asyncStorage.storeDataAsync('isSetup', true);
      this.setState({
        ...pregData,
        isSetup: true
      });
    },
  }

  async componentDidMount() {
    const keys = ['dueDate', 'currentWeek', 'timePregnant', 'tagLine', 'daysPassed', 'name', 'relation', 'isSetup'];
    const obj = await asyncStorage.getDataAsyncFromKeys(keys);
    this.setState({
      ...obj,
      isLoading: false
    })
  }

  renderPages = (SetupStages, AppContainer) => {
    if (this.state.isLoading) {
      return (
        <Container style={{ flex: 1, justifyContent: 'center', }}>
          <Spinner color='red' />
        </Container>
      )
    }
    return (this.state.isSetup) ? < AppContainer /> : <SetupStages />;
  }

  render() {
    const SetupConfig = Setup(this.state);
    const SetupStages = createAppContainer(SetupConfig);
    const AppConfig = Menu(this.state);
    const AppContainer = createAppContainer(AppConfig);
    return this.renderPages(SetupStages, AppContainer);
  }
}
