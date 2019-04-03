import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
import { StyleSheet, Text, View } from 'react-native';

export default class MyDatePicker extends Component {
    constructor(props){
        super(props)
        
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
    this.state = {date:`${YYYY}-${MM}-${DD}`};
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
        onDateChange={(date) => {this.setState({date: date})}}
      />
    )
  }
}