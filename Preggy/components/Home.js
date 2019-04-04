import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

export default class Home extends Component {
    static navigationOptions = {
        header: null,
      };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Welcome! Please log in</Text>
        <Button
        title="Log in"
        onPress={() => navigate('LogIn')}
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
