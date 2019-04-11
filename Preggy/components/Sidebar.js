import React, { Component } from 'react';
import { Button, Container, Content, List, ListItem, Text } from 'native-base';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';

import AsyncStorage from '@react-native-community/async-storage';

class ListExample extends Component {
  state = {
    currentWeek: '',
  }

  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
      params: { currentWeek: this.state.currentWeek },
    });
    this.props.navigation.dispatch(navigateAction);
  }

  /* For use in development mode. 
  Clears AsyncStorage and takes user back to setup stage. */
  deleteAllData = async () => {
    return await AsyncStorage.clear();
  }

  async componentDidMount() {
    const currentWeek = await AsyncStorage.getItem('currentWeek');
    console.log(currentWeek);
    this.setState({ currentWeek });
  }

  render() {
    return (
      <Container>
        <Content style={{ marginTop: 55 }}>
          <List>
            <ListItem>
              {/* Clears AsyncStorage and takes user back to setup stage. */}
              <Button danger onPress={this.deleteAllData}>
                <Text>Ta bort Användardata</Text>
              </Button>
              <Button transparent dark onPress={this.props.navigation.closeDrawer}>
                <Text>X</Text>
              </Button>
            </ListItem>
            <ListItem>
              <Text onPress={this.props.navigation.closeDrawer} >Min Profil</Text>
            </ListItem>
            <ListItem>
              <Text onPress={this.navigateToScreen('WeekInfo')} >Min Graviditet</Text>
            </ListItem>
            <ListItem>
              <Text onPress={this.navigateToScreen('Explore')} >Upptäck</Text>
            </ListItem>
            <ListItem>
              <Text onPress={this.navigateToScreen('SavedArticles')} >Sparade Artiklar</Text>
            </ListItem>
            <ListItem>
              <Text onPress={this.navigateToScreen('Notifications')} >Notiser</Text>
            </ListItem>
            <ListItem>
              <Text onPress={this.navigateToScreen('Themes')} >Teman</Text>
            </ListItem>
            <ListItem>
              <Text onPress={this.navigateToScreen('Settings')} >Inställningar</Text>
            </ListItem>
            <ListItem>
              <Text onPress={this.navigateToScreen('Support')} >Support</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

ListExample.propTypes = {
  navigation: PropTypes.object
};

export default ListExample;