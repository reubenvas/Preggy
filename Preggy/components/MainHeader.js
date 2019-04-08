import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import styles from '../styles/index';
export default class MainHeader extends Component {
  render() {
    const { goBack } = this.props.navigation;
    return (
        <Header style={styles.row}>
          <Left>
            <Button transparent onPress={() => goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Preggy</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
    );
  }
}