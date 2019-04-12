import React, { Component } from 'react';
import MainHeader from './MainHeader.js';
import preggyService from '../services/preggyService';
import { Container, View, Text } from 'native-base';

export default class WeekInfo extends Component {
  static navigationOptions = {
    header: null,
    drawerLockMode: 'locked-closed',
  };

  state = {
    title: '',
    content: 'data is loading',
    currentWeek: '',
  }

  componentWillMount() {
    this.setState({ currentWeek: this.props.navigation.getParam('currentWeek') });
  }

  async componentDidMount() {
    const result = await preggyService.getWeek(this.state.currentWeek);
    this.setState({ title: result.title, content: result.content });
  }

  render() {
    return (
      <Container>
        <MainHeader navigation={this.props.navigation} />
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgb(251,246,247)',
          }}
        >
          <Text
            style={{
              fontSize: 25,
              marginBottom: 20,
            }}
          >
            {this.state.title}
          </Text>
          <Text
            style={{
              marginTop: 10,
              marginRight: 30,
              marginLeft: 30,
              textAlign: 'justify'
            }}
          >
            {this.state.content}
          </Text>
        </View>
      </Container>
    )
  }
}
