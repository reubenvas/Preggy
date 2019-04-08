import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import styles from '../styles';


export default class Home extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    const { getParam, navigate } = this.props.navigation;

    const [name, relation, currentWeek, tagLine, timePregnant, dueDate] = 
[getParam('name'), getParam('relation'), getParam('currentWeek'), getParam('tagLine'), getParam('timePregnant'), getParam('dueDate')];

    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Hej {name}!</Text>
        <Text style={styles.smallerText}>{tagLine}</Text>
        <Text style={styles.heading}>Du ska bli {relation}!</Text> 
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
