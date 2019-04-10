import React, { Component } from 'react';
import { Button, Container, Content, List, ListItem, Text } from 'native-base';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';

import AsyncStorage from '@react-native-community/async-storage';

class ListExample extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  deleteAllData = async () => {
    return await AsyncStorage.clear();
  }


  render() {
    return (
      <Container>
        <Content style={{ marginTop: 55 }}>
          <List>
            <ListItem>
              <Button danger onPress={() => this.deleteAllData() }>
                <Text>Ta bort Användardata</Text>
              </Button>
              <Button transparent dark onPress={() => this.props.navigation.closeDrawer() }>
                <Text>X</Text>
              </Button>
            </ListItem>
            <ListItem>
              <Text onPress={this.navigateToScreen('Home')} >Min Profil</Text>
            </ListItem>
            <ListItem>
              <Text onPress={this.navigateToScreen('WeekInfo')} > Vad händer med mamma </Text>
            </ListItem>
            <ListItem>
              <Text onPress={this.navigateToScreen('Home')} >Upptäck</Text>
            </ListItem>
            <ListItem>
              <Text onPress={this.navigateToScreen('Home')} >Sparade Artiklar</Text>
            </ListItem>
            <ListItem>
              <Text onPress={this.navigateToScreen('Home')} >Notiser</Text>
            </ListItem>
            <ListItem>
              <Text onPress={this.navigateToScreen('Home')} >Färger</Text>
            </ListItem>
            <ListItem>
              <Text onPress={this.navigateToScreen('Home')} >Inställningar</Text>
            </ListItem>
            <ListItem>
              <Text onPress={this.navigateToScreen('Home')} >Support</Text>
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