import React, { Component } from 'react';
import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import { AsyncStorage } from 'react-native';

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

storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(error);
  }
};

retrieveData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (error) {
    console.error(error);
  }
};

export default class App extends Component {
  state = {
    isSetup: false,
    change: () => {
      this.setState({ isSetup: true })
    },
    setPregInfo: (...pregData) => {
      pregData = pregData[0];
      for(key in pregData){
        storeData(key, pregData[key]);
      }
      storeData('isSetup', true);
      this.setState( {...pregData});

    },
    dueDate: '',
    currentWeek: '',
    timePregnant: '',
    tagLine: '',
    daysPassed: '',
    name: '',
    relation: '',
  }

  getPregDataStorage = async () => {
    const keys = ['dueDate', 'currentWeek', 'timePregnant', 'tagLine', 'daysPassed', 'name', 'relation', 'isSetup'];
      const data = await keys.map( key => retrieveData(key))
      const values = await Promise.all(data);
      const obj = {};
      values.forEach( (value, i) => {
        obj[keys[i]] = value;
      })
      return obj;
  }

  async componentDidMount(){
    const obj = await this.getPregDataStorage();
    this.setState({...obj})
  }
  
  renderPages = (SetupStages, AppContainer) => {
    if (this.state.isSetup) {
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

