import React, { Component } from 'react';
import getDate from '../../handlers/getDateAsString';
import { Button, Text, Container, View } from 'native-base';

import MainHeader from '../MainHeader';

import DatePicker from './DatePicker';

export default class SetupPeriod extends Component {
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

  setPregDates = (pregnancyInfo) => {
    this.setState({ ...pregnancyInfo })
  }

  maxDate = getDate(new Date(new Date() - 86400000));
  minDate = getDate(new Date(Date.now() - 280 * 86400000))

  renderDueDate = () => {
    if (this.state.dueDate) {
      return (
        <View>
          <Text
            style={{
              marginTop: 12,
              fontFamily: 'Roboto-Light',
              fontSize: 14,
              textAlign: 'center'
            }} >Ditt beräknade förlossningsdatum är </Text>
          <Text
            style={{
              fontFamily: 'Roboto-Light',
              fontSize: 14,
              textAlign: 'center'
            }}
          >
            {this.state.dueDate}
          </Text>
        </View>
      )
    }
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
              style={{
                marginBottom: 20,
                fontSize: 20,
                textAlign: 'center',
                fontFamily: 'NotoSerifTC-Regular'
              }}
            >
              Första dagen av senaste mensen:
            </Text>
            <DatePicker
              minDate={this.minDate}
              maxDate={this.maxDate}
              setDates={this.setPregDates}
              uri='/api/get_week/period_date/'
            />
            {this.renderDueDate()}
            <Button
              bordered block
              style={{ marginTop: 20 }}
              onPress={() => {
                (this.state);
                if (this.state.dueDate) {
                  const { dueDate, currentWeek, timePregnant, tagLine, daysPassed } = this.state;
                  this.props.setPregInfo({ dueDate, currentWeek, timePregnant, tagLine, daysPassed, name, relation })
                }
              }

              }>
              <Text>Klar</Text>
            </Button>
          </View>
        </Container>
      </Container>
    )
  }
}
