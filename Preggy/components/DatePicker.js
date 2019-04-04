import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
import config from '../config'
import { StyleSheet, Text, View } from 'react-native';

export default class MyDatePicker extends Component {
  state = { date: this.displayTodaysDate() };
  displayTodaysDate() {
    const date = new Date()
    const YYYY = date.getFullYear()
    const MM = formatTwoDigit(date.getMonth() + 1);
    const DD = formatTwoDigit(date.getDate());
    function formatTwoDigit(num){
        if (num < 10){
            return `0${num}`;
        }
        return num;
    }
    return `${YYYY}-${MM}-${DD}`;
  }

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
        minDate="2018-01-01"
        maxDate="2020-01-01"
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
          console.log(pregnancyInfo);
          this.props.setDates(pregnancyInfo);
          }} 
      />
    )
  }
}