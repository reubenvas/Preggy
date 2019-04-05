import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import getDate from '../handlers/getDateAsString';
import styles from '../styles';


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
    maxDate = getDate(new Date(new Date() - 86400000)); //IGÅR
    minDate = getDate(new Date(Date.now() - 280 * 86400000)) //IGÅR - 280DGR
    render() {
        const { navigation } = this.props;
        const name = navigation.getParam('name');
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Första dagen av senaste mensen:</Text>
                <DatePicker
                    minDate={this.minDate}
                    maxDate={this.maxDate}
                    setDates={this.setPregDates}
                    uri='/api/get_week/period_date/'
                    />
                <Text style={styles.text} style={styles.topMargin}>Ditt beräknade förlossningsdatum är </Text>
                <Text>{this.state.dueDate}</Text>
                <Button
                    title="Klar"
                    onPress={() => navigation.navigate('Home', {
                        ...this.state,
                        name: name
                    })} />
            </View>
        )
    }
}
