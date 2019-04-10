import React, { Component } from 'react'
import { WebView } from 'react-native';
import { Container, View, Text, Spinner } from 'native-base';
import MainHeader from './MainHeader';

export default class BlogFrame extends Component {
  static navigationOptions = {
    header: null,
    drawerLockMode: 'locked-closed',
  };

  state = {
    isLoading: true,
  }

  hideSpinner = () => {
    this.setState({ isLoading: false })
  }

  renderSpinner = () => {
    return <Container style={{ flex: 1, justifyContent: 'center', }}><Spinner color='red' /></Container>
  }
  displayWebView = () => {
    const url = this.props.navigation.getParam('url');
    /* if (this.state.isLoading) {
      return <Container style={{ flex: 1, justifyContent: 'center', }}><Spinner color='red' /></Container>
    } */
    return (
      <Container>
        <MainHeader
          navigation={this.props.navigation}
          back={true}
        />
        <WebView
          source={{ uri: url }}
          renderLoading={() => this.renderSpinner()}
          startInLoadingState={true}
        />
      </Container>
    );
  }
  render() {
    return this.displayWebView();
  }
}
