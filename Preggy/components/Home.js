import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, TextInput,  } from 'react-native';

export default class Home extends Component {
  render() {

    return (
    <View style={styles.container}>
    <Text>Welcome back Array Williams</Text>
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