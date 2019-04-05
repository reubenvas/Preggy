import React, { Component } from 'react'
import DatePicker from './DatePicker';
import { Button, StyleSheet, Text, View, TextInput, } from 'react-native';
import getDate from '../handlers/getDateAsString';


export default class SetupDueDate extends Component {
    // CALCULATE FROM DUEDATE
    minDate = getDate(new Date());                      // IDAG
    maxDate = getDate(new Date(Date.now() + 280 * 86400000)) // IDAG + 280DGR
    state = {
        dueDate: '',
        currentWeek: '',
        timePregnant: ''
    }
    setPregDates = (pregnancyInfo) => {
        this.setState({ ...pregnancyInfo })
    }


    render() {
        const { navigate } = this.props.navigation;
        const { navigation } = this.props;
        const name = navigation.getParam('name');
        return (
            <View style={styles.container}>
                <Text>My due date is:</Text>
                <Text>{this.state.currentWeek}</Text>
                <DatePicker
                    minDate={this.minDate}
                    maxDate={this.maxDate}
                    setDates={this.setPregDates}
                    uri='/api/get_week/due_date/'
                />
                <Text
                    onPress={() => navigate('SetupPeriod', {
                        name
                    })}
                >Help me calculate</Text>
                <Button
                    title="Done"
                    onPress={() => navigate('Home', {
                        ...this.state,
                        name
                    })}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
})