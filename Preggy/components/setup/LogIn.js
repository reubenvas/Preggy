import React, { Component } from 'react'
import { Button, Text, Container, View, Input, Item } from 'native-base';
import MainHeader from '../MainHeader';

export default class LogIn extends Component {
  static navigationOptions = {
    header: null,
    drawerLockMode: 'locked-closed',
  };
  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <MainHeader
          navigation={navigation}
          menu={false}
        />
        <Container
          style={{
            flex: 1,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgb(251,246,247)',
          }}>
          <View style={{width: 300}}>
            <Item>
              <Input
                placeholder="Email"
              />
            </Item>
            <Item>
              <Input
                placeholder="Lösenord"
                secureTextEntry={true}
              />
            </Item>
            <Button
              style={{marginTop: 20}}
              bordered block
              onPress={() => navigation.navigate('EnterName')}>
              <Text>Nästa</Text>
            </Button>
          </View>
        </Container>
      </Container>
    );
  }
}


