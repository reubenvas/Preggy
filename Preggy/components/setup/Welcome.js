import React, { Component } from 'react';
import { Button, Container, Text, Header, View } from 'native-base';
import styles from '../../styles';

export default class Welcome extends Component {
  static navigationOptions = {
    header: null,
    drawerLockMode: 'locked-closed',
  };
  render() {
    const { navigation } = this.props;
    return (
      <Container style={styles.center}>
        <View style={styles.center}>
          <Text style={styles.heading}>Välkommen till Preggy!</Text>
          <Button bordered block
            onPress={() => navigation.navigate('LogIn')}
          >
            <Text>Logga In</Text>
          </Button>
        </View>
      </Container>
    )
  }
}


