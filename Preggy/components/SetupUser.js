import React from 'react';
import DatePicker from './DatePicker';
import { StyleSheet, Text, View } from 'react-native';


export default class SetupUser extends React.Component {
    state = {
        dueDate: '',
        currentWeek: '',
        timePregnant: ''
    }

    setDates = (pregnancyInfo) => {
        this.setState({...pregnancyInfo})
    }

    render() {
        if(this.state.dueDate === ''){
            return (
                <View>
                    <Text>Hej</Text>
                <DatePicker setDates={this.setDates} />                    
                </View>
            )
        }

        return (
            <View>
                <DatePicker setDates={this.setDates} />
                <Text> Your due date is {this.state.dueDate}</Text>
                <Text>You are in Week {this.state.currentWeek}</Text>
                <Text>( {this.state.timePregnant} )</Text>
            </View>
        );
    }
}