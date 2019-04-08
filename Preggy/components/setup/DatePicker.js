import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
import config from '../../config'
import getDate from '../../handlers/getDateAsString';

export default class MyDatePicker extends Component {
  static navigationOptions = {
    header: null,
  };
  
  state = {
    date: getDate(new Date(Date.now())),
    maxDate: this.props.maxDate,
    minDate: this.props.minDate,
  };

  // FIX SO THAT THE USER HAS TO CHOOSE A DATE!

  uri = this.props.uri;

  getPregnancyInfo = async (date) => {
    const data = await fetch(`${config.backendUrl}${this.uri}${date}`)
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
        }}
        onDateChange={ async (date) => {
          this.setState( {date} );
          const pregnancyInfo = await this.getPregnancyInfo(date);
          const formattedDueDate = getDate(new Date(pregnancyInfo.dueDate));
          pregnancyInfo.dueDate = formattedDueDate;
          this.props.setDates(pregnancyInfo);
          }}
      />
    )
  }
}