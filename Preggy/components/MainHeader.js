import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import styles from '../styles/index';

export default class MainHeader extends Component {
  goBack = this.props.navigation.goBack;

  displayMenuBtn = () => {
    if (this.props.menu !== false) {
      return (
        <Button transparent>
        <Icon name='menu' />
      </Button>
      )
    }
  }
  displayBackBtn = () => {
    if (this.props.back !== false) {
      return (
        <Button transparent onPress={() => this.goBack()}>
              <Icon name='arrow-back' />
            </Button>
      )
    }
  }

  render() {
    return (
        <Header>
          <Left>
            {this.displayBackBtn()}
          </Left>
          <Body>
            <Title>Preggy</Title>
          </Body>
          <Right>
            {this.displayMenuBtn()}
          </Right>
        </Header>
    );
  }
}