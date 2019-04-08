import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

import styles from '../../styles';

export default class Welcome extends Component {
    static navigationOptions = {
        header: null,
      };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Välkommen till Preggy!</Text>
        <Button
        title="Logga in"
        onPress={() => navigate('LogIn')}
      />
      </View>
    )
  }
}


