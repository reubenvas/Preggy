import React, { Component } from 'react'
import DatePicker from './DatePicker';
import { Button, StyleSheet, Text, View, TextInput, } from 'react-native';
import getDate from '../handlers/getDateAsString';


export default class SetupDueDate extends Component {

    // CALCULATE FROM DUEDATE
  minDate = getDate(new Date());                      // IDAG
  maxDate = getDate(new Date(Date.now() + 280 * 86400000)) // IDAG + 280DGR
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text>My due date is:</Text>
                <DatePicker minDate={this.minDate} maxDate={this.maxDate}/>
                <Text
                    onPress={() => navigate('SetupPeriod')}
                >Help me calculate</Text>
                <Button
                    title="Done"
                    onPress={() => navigate('Home')}
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