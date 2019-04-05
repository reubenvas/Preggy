import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';
import preggyService from '../services/preggyService';

export default class WeekInfo extends Component {

    state = {
        title: '',
        content: 'data is loading',
    }

    currentWeek =  this.props.navigation.getParam('currentWeek');

    async componentDidMount() {
        const result = await preggyService.getWeek(this.currentWeek);
        this.setState({ title: result.title, content: result.content });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>{this.state.title}</Text>
                <Text style={styles.smallerText} style={styles.weekInfo}>{this.state.content}</Text>
            </View>
        )
    }
}
