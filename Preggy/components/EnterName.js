import React, { Component } from 'react'
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

export default class EnterName extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
        <View style={styles.container}>
            <Text>Enter your name:</Text>
            <TextInput placeholder="Sarah"></TextInput>
            <Button
            title="Next"
            onPress={() => navigate('SetupDueDate')}
        />
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