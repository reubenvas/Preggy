import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import preggyService from './services/preggyService';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: 'data is loading',
    }
  }
  async componentDidMount() {
    const result = await preggyService.getWeek();
    this.setState({content: result.content});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.content}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
