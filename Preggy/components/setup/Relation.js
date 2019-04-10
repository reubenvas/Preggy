import React, { Component } from 'react'
import { Button, Text, Container, View } from 'native-base';
import styles from '../../styles';

import MainHeader from '../MainHeader';

export default class EnterName extends Component {
  static navigationOptions = {
    header: null,
    drawerLockMode: 'locked-closed',
  };
  render() {
    const { navigation } = this.props;
    const name = navigation.getParam('name');

    return (
      <Container>
        <MainHeader 
        navigation={navigation}
        menu={false}
        />
        <Container style={styles.center}>
          <View style={styles.center}>
            <Text style={styles.text}>Vem är du?</Text>
            <View style={styles.row}>
              <Button style={{ marginHorizontal: 10, marginTop: 13 }}
                bordered dark
                onPress={() => navigation.navigate('SetupDueDate', {
                  relation: 'mamma',
                  name,
                })}>
                <Text>Mamma</Text>
              </Button>
              <Button disabled bordered
                style={{ marginHorizontal: 10, marginTop: 13 }}
              >
                <Text>Partner</Text>
              </Button>
              <Button disabled bordered
                style={{ marginHorizontal: 10, marginTop: 13 }}
              >
                <Text>Vän</Text>
              </Button>
            </View>
          </View>
        </Container>
      </Container>
    )
  }
}

