import React, { Component } from 'react'
import { Button, Text, View, TextInput } from 'react-native';
import styles from '../styles';

export default class LogIn extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Email:</Text>
        <TextInput
          style={styles.text}
          placeholder="john@appleseed.com"
        />
        <Text style={styles.text}>Lösenord:</Text>
        <TextInput
          style={styles.text}
          placeholder="Lösenord"
          secureTextEntry={true}
        />
        <Button
          title="Nästa"
          onPress={() => navigate('EnterName')}
        />
      </View>
    );
  }
}


