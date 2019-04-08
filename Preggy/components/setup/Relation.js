import React, { Component } from 'react'
import { Button, Text, View, TextInput } from 'react-native';
import styles from '../../styles';


export default class EnterName extends Component {
  render() {
    const {navigation} = this.props;
    const name = navigation.getParam('name');

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Vem är du?</Text>
            <Button title="Mamma" onPress={() => navigation.navigate('SetupDueDate', {
                relation: 'mamma',
                name,
            })}/>
            <Button
            title="Partner"
            />
            <Button
            title="Vän"
            />
        </View>
    )
  }
}

