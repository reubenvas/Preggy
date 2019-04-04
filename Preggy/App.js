import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import preggyService from './services/preggyService';
import SetupUser from './components/SetupUser';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      content: 'data is loading',
    }
  }
  async componentDidMount() {
    const result = await preggyService.getWeek(12);
    this.setState({title: result.title, content: result.content});
  }

  render() {
    return (
      <View style={styles.container}>
        <SetupUser />
        {/* <Text>{this.state.title}</Text>
        <Text>{this.state.content}</Text> */}
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
