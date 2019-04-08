import React, { Component } from 'react'
import DatePicker from './DatePicker';
import { Button, Text, View } from 'react-native';
import getDate from '../../handlers/getDateAsString';
import styles from '../../styles';



export default class SetupDueDate extends Component {
    state = {
        dueDate: '',
        currentWeek: '',
        timePregnant: '',
        tagLine: ''
    }

    minDate = getDate(new Date()); // IDAG
    maxDate = getDate(new Date(Date.now() + 279 * 86400000)); // IDAG + 280DGR

    setPregDates = (pregnancyInfo) => {
        this.setState({ ...pregnancyInfo })
    }


    render() {
        const { navigation } = this.props;
        const name = navigation.getParam('name');
        const relation = navigation.getParam('relation');
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Mitt beräknade förlossningsdatum:</Text>
                <DatePicker
                    minDate={this.minDate}
                    maxDate={this.maxDate}
                    setDates={this.setPregDates}
                    uri='/api/get_week/due_date/'
                />
                <Text
                    style={styles.smallerText}
                    onPress={() => navigation.navigate('SetupPeriod', {name, relation})}
                >
                Hjälp mig att beräkna
                </Text>
                <Button
                    title="Klar"
                    onPress={() => {
                        if(this.state.dueDate){
                            navigation.navigate('Home', {
                            ...this.state,
                            name,
                            relation
                            })
                        }
                    }
                }
                />
            </View>
        )
    }
}

