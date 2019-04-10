import React, { Component } from 'react'
import { Button, Text, Container, View, Input, Item } from 'native-base';
import styles from '../../styles';
import MainHeader from '../MainHeader';

export default class LogIn extends Component {
  static navigationOptions = {
    header: null,
    drawerLockMode: 'locked-closed',
  };
  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <MainHeader 
        navigation={navigation}
        menu={false}
        />
        <Container style={styles.center}>
          <View style={styles.center} style={styles.card}>
            <Item>
              <Input
                placeholder="Email"
              />
            </Item>
            <Item>
              <Input
                placeholder="Lösenord"
                secureTextEntry={true}
              />
            </Item>
            <Button
              style={styles.topMargin}
              bordered block
              onPress={() => navigation.navigate('EnterName')}>
              <Text>Nästa</Text>
            </Button>
          </View>
        </Container>
      </Container>
    );
  }
}


