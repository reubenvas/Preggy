import React, { Component } from 'react'
import DatePicker from './DatePicker';
import getDate from '../../handlers/getDateAsString';
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

  minDate = getDate(new Date());
  maxDate = getDate(new Date(Date.now() + 279 * 86400000));

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
        <Container
          style={{
            flex: 1,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgb(251,246,247)',
          }}
        >
          <View style={{alignItems: 'center'}}>
            <Text
              style={{ marginBottom: 20, fontSize: 20, textAlign: 'center' }}
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
              style={{
                fontFamily: 'Roboto-Light',
                fontSize: 14,
                paddingVertical: 5,
              }}
              onPress={() => navigation.navigate('SetupPeriod', { name, relation })}
            >
              Hjälp mig att beräkna
          </Text>
            <Button
              style={{ marginTop: 20 }}
              bordered block
              onPress={() => {
                if (this.state.dueDate) {
                  const { dueDate, currentWeek, timePregnant, tagLine, daysPassed } = this.state;
                  this.props.setPregInfo({ dueDate, currentWeek, timePregnant, tagLine, daysPassed, name, relation })
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

