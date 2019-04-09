import ProgressCircle from 'react-native-progress-circle';
import React, {Component} from 'react';
import { Text } from 'react-native';

export default class preggyProgress extends Component{
    state = {
        percentage: 0,
    }
    async componentDidMount(){

        const recurse = async () => {
            return new Promise((resolve) => {
                setTimeout( () => {
                    this.setState( {percentage: this.state.percentage + 1});
                    resolve()
                }, 3);
            })
        }

        while(this.state.percentage < this.props.percentage){
            await recurse()
        }
    }


    render() {
        return (
            <ProgressCircle
            percent={this.state.percentage}
            radius={60}
            borderWidth={8}
            color="rgb(233,136,138)"
            shadowColor="rgb(239,234,235)"
            bgColor="rgb(251,246,247)"
            >
            <Text style={{ fontSize: 18 }}>{this.props.currentWeek}</Text>
            <Text style={{ fontSize: 10 }}>({this.props.timePregnant})</Text>
        </ProgressCircle>
        )
    }
}