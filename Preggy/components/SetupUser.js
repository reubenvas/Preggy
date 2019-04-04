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
        return (
            <View>
                <Text>{this.state.timePregnant}</Text>
                <DatePicker setDates={this.setDates} />
            </View>
        );
    }
}