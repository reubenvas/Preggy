import React, { Component } from 'react'
import { Button, Text, View, TextInput } from 'react-native';
import styles from '../styles';


export default class EnterName extends Component {
  state = {
    name: '',
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Ditt namn:</Text>
            <TextInput style={styles.text} placeholder="Sarah" onChange={ (e) => this.setState( {name: e.nativeEvent.text} )}>{this.state.name}</TextInput>
            <Button
            title="Nästa"
            onPress={() => navigate('SetupDueDate', {
              name: this.state.name
            })}
        />
        </View>
    )
  }
}

