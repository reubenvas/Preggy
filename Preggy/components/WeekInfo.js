import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';
import MainHeader from './MainHeader';
import preggyService from '../services/preggyService';
import {Container} from 'native-base';

export default class WeekInfo extends Component {
    static navigationOptions = {
        header: null,
      };
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
            <Container>
                <MainHeader navigation={this.props.navigation} />
                    <View style={styles.center}>
                        <Text style={styles.heading}>{this.state.title}</Text>
                        <Text style={styles.smallerText} style={styles.weekInfo}>{this.state.content}</Text>
                    </View>
            </Container>
        )
    }
}
