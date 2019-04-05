import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import styles from '../styles';


export default class Home extends Component {
  render() {
    const { getParam, navigate } = this.props.navigation;

    const [name, currentWeek, timePregnant, dueDate] = [getParam('name'), getParam('currentWeek'), getParam('timePregnant'), getParam('dueDate')];

    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Hej {name}!</Text>
        <Text style={styles.smallerText}>Du är i vecka {currentWeek} ( {timePregnant} )</Text>
        <Text style={styles.smallerText}>Ditt beräknade förlossningsdatum är {dueDate}</Text>
        <Button
          title="Se vad som händer denna vecka"
          onPress={() => navigate('WeekInfo', {
            currentWeek,
          })}
        />
      </View>
    )
  }
}
