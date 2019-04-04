import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
import config from '../config'
import { StyleSheet, Text, View } from 'react-native';

import getDate from '../handlers/getDateAsString';

export default class MyDatePicker extends Component {

  state = {
    date: getDate(new Date(Date.now())),
    maxDate: this.props.maxDate,
    minDate: this.props.minDate,
  };

  // FIX SO THAT THE USER HAS TO CHOOOOSE A DATE!

  getPregnancyInfo = async (date) => {
    const data = await fetch(`${config.backendUrl}/api/get_week/period_date/${date}`)
      .then(res => res.json())
      .catch(err => console.log(err));

      return data;
  }

  render(){
    return (

      <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate={this.state.minDate}
        maxDate={this.state.maxDate}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={ async (date) => {
          this.setState( {date} );
          const pregnancyInfo = await this.getPregnancyInfo(date);
          const formattedDueDate = this.getDate(new Date(pregnancyInfo.dueDate));
          pregnancyInfo.dueDate = formattedDueDate;
          this.props.setDates(pregnancyInfo);
          }}
      />
    )
  }
}