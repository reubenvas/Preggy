import React, { Component } from 'react';
import { Container, View, Text, Content } from 'native-base';
import MainHeader from '../MainHeader';

export default class Settings extends Component {
  render() {
    return (
      <Container>
        <MainHeader
          navigation={this.props.navigation}
        />
        <Content style={{ backgroundColor: 'rgb(251,246,247)' }}>
          <View style={{
            flex: 1,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Text style={{ fontSize: 20, marginTop: 30 }}>
              Inställningar
            </Text>
          </View>
        </Content>
      </Container>
    )
  }
}
