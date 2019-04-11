import React, { Component } from 'react';
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

export default class MainHeader extends Component {
  goBack = this.props.navigation.goBack;

  displayMenuBtn = () => {
    if (this.props.back !== false) {
      return (
        <Button transparent onPress={() => this.goBack()}>
          <Icon name='arrow-back' />
        </Button>
      )
    }
    if (this.props.menu !== false) {
      return (
        <Button transparent
          onPress={() => this.props.navigation.openDrawer()}>
          <Icon name='menu' />
        </Button>
      )
    }
  }

  render() {
    return (
      <Header>
        <Left>
          {this.displayMenuBtn()}
        </Left>
        <Body>
          <Title>Preggy</Title>
        </Body>
        <Right />
      </Header>
    );
  }
}