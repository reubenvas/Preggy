import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import getDate from '../handlers/getDateAsString';


import DatePicker from './DatePicker';

export default class SetupPeriod extends Component {

    state = {
        dueDate: '',
        currentWeek: '',
        timePregnant: ''
    }
    setPregDates = (pregnancyInfo) => {
        this.setState({ ...pregnancyInfo })
    }

    // CALCULATE FROM PERIOD DATE
    maxDate = getDate(new Date(new Date() - 86400000)); // IGÅR
    minDate = getDate(new Date(Date.now() - 280 * 86400000))// IGÅR - 280DGR
    render() {
        const { navigate } = this.props.navigation;
        const { navigation } = this.props;
        const name = navigation.getParam('name');
        return (
            <View style={styles.container}>
                <Text>First day of last period:</Text>
                <DatePicker
                    minDate={this.minDate}
                    maxDate={this.maxDate}
                    setDates={this.setPregDates}
                    uri='/api/get_week/period_date/'
                    />
                <Text>Your due date is: {this.state.dueDate}</Text>
                <Button
                    title="Done"
                    onPress={() => navigate('Home', {
                        ...this.state,
                        name: name
                    })} />
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