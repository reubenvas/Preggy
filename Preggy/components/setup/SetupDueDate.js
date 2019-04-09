import React, { Component } from 'react'
import DatePicker from './DatePicker';
import getDate from '../../handlers/getDateAsString';
import styles from '../../styles';
import { Button, Text, Container, View } from 'native-base';

import MainHeader from '../MainHeader';


export default class SetupDueDate extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    dueDate: '',
    currentWeek: '',
    timePregnant: '',
    tagLine: '',
    daysPassed: '',
  }

  minDate = getDate(new Date()); // IDAG
  maxDate = getDate(new Date(Date.now() + 279 * 86400000)); // IDAG + 280DGR

  setPregDates = (pregnancyInfo) => {
    this.setState({ ...pregnancyInfo })
  }


  render() {
    const { navigation } = this.props;
    const name = navigation.getParam('name');
    const relation = navigation.getParam('relation');
    return (
      <Container>
        <MainHeader 
        navigation={navigation}
        menu={false}
        />
        <Container style={styles.center}>
          <View style={styles.center}>
            <Text
              style={{ marginBottom: 20, fontSize: 20, textAlign: 'center', fontFamily: 'NotoSerifTC-Regular' }}
            >
              Mitt beräknade förlossningsdatum:
          </Text>
            <DatePicker
              minDate={this.minDate}
              maxDate={this.maxDate}
              setDates={this.setPregDates}
              uri='/api/get_week/due_date/'
            />
            <Text
              style={styles.smallerText}
              onPress={() => navigation.navigate('SetupPeriod', { name, relation })}
            >
              Hjälp mig att beräkna
          </Text>
            <Button
              style={styles.topMargin}
              bordered block
              onPress={() => {
                if (this.state.dueDate) {
                  navigation.navigate('Home', {
                    ...this.state,
                    name,
                    relation
                  })
                }
              }
              }
            >
              <Text>Klar</Text>
            </Button>
          </View>
          </Container>
          </Container>
          )
        }
      }
      
