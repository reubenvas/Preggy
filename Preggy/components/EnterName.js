import React, { Component } from 'react'
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

export default class EnterName extends Component {
  state = {
    name: '',
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
        <View style={styles.container}>
            <Text>Enter your name:</Text>
            <TextInput placeholder="Sarah" onChange={ (e) => this.setState( {name: e.nativeEvent.text} )}>{this.state.name}</TextInput>
            <Button
            title="Next"
            onPress={() => navigate('SetupDueDate', {
              name: this.state.name
            })}
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