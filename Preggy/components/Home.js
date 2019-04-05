import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, TextInput,  } from 'react-native';

export default class Home extends Component {
  render() {
    const { navigate } = this.props.navigation;
    const name = this.props.navigation.getParam('name');
    const currentWeek = this.props.navigation.getParam('currentWeek');
    return (
    <View style={styles.container}>
    <Text>Hej {name}</Text>
    <Text>You're in week {currentWeek}</Text>
    </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
  })