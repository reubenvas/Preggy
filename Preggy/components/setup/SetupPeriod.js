import React, { Component } from 'react';
import getDate from '../../handlers/getDateAsString';
import styles from '../../styles';
import { Button, Text, Container, View } from 'native-base';

import MainHeader from '../MainHeader';

import DatePicker from './DatePicker';

export default class SetupPeriod extends Component {
  static navigationOptions = {
    header: null,
    // drawerLockMode: 'locked-closed',
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

  maxDate = getDate(new Date(new Date() - 86400000)); //IGÅR
  minDate = getDate(new Date(Date.now() - 280 * 86400000)) //IGÅR - 280DGR

  renderDueDate = () => {
    if (this.state.dueDate) {
      return (
        <React.Fragment>
          <Text style={{
            marginTop: 12,
            fontFamily: 'Roboto-Light',
            fontSize: 14,
            paddingVertical: 5
          }} >Ditt beräknade förlossningsdatum är </Text>
          <Text style={styles.smallerText} >{this.state.dueDate}</Text>
        </React.Fragment >
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
        <Container style={styles.center}>
          <View style={styles.center}>
            <Text
              style={{ marginBottom: 20, fontSize: 20, textAlign: 'center', fontFamily: 'NotoSerifTC-Regular' }}
            >Första dagen av senaste mensen:</Text>
            <DatePicker
              minDate={this.minDate}
              maxDate={this.maxDate}
              setDates={this.setPregDates}
              uri='/api/get_week/period_date/'
            />
            {this.renderDueDate()}
            <Button
              bordered block
              style={styles.topMargin}
              onPress={() => {
                (this.state);
                if (this.state.dueDate) {
                  const { dueDate, currentWeek, timePregnant, tagLine, daysPassed } = this.state;
                  this.props.setPregInfo( {dueDate, currentWeek, timePregnant, tagLine, daysPassed, name, relation })
                  this.props.change();
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
