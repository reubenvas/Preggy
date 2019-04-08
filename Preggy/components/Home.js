import React, { Component } from 'react';
import styles from '../styles';
import { Button, Text, Container, View } from 'native-base';


export default class Home extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    const { getParam, navigate } = this.props.navigation;

    const [name, relation, currentWeek, tagLine, timePregnant, dueDate] = 
[getParam('name'), getParam('relation'), getParam('currentWeek'), getParam('tagLine'), getParam('timePregnant'), getParam('dueDate')];

    return (
    <Container style={styles.center}>
      <View style={styles.center}>
        <Text style={styles.heading}>Hej {name}!</Text>
        <Text style={styles.smallerText}>{tagLine}</Text>
        <Text style={styles.heading}>Du ska bli {relation}!</Text> 
        <Text style={styles.smallerText}>Du är i vecka {currentWeek} ( {timePregnant} )</Text>
        <Text style={styles.smallerText}>Ditt beräknade förlossningsdatum är {dueDate}</Text>
        <Button
          onPress={() => navigate('WeekInfo', {
            currentWeek,
          })}
        >
        <Text>Se vad som händer denna vecka</Text>
        </Button>
      </View>
      </Container>
    )
  }
}
