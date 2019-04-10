import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text } from 'native-base';
import {NavigationActions} from 'react-navigation';
import PropTypes from 'prop-types';

class ListExample extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
        routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }
  render() {
    return (
      <Container>
        <Content style={{marginTop: 55}}>
          <List>
            <ListItem>
              <Text onPress={this.navigateToScreen('Home')} >Home</Text>
            </ListItem>
            <ListItem>
              <Text onPress={this.navigateToScreen('WeekInfo')}>Denna vecka</Text>
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