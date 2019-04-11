import React, { Component } from 'react';
import { Button, Container, Text, View } from 'native-base';

export default class Welcome extends Component {
  static navigationOptions = {
    header: null,
    drawerLockMode: 'locked-closed',
  };
  render() {
    const { navigation } = this.props;
    return (
      <Container 
        style={{
          flex: 1,
          flexDirection: 'column',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgb(251,246,247)',
        }}>
        <View>
          <Text 
            style={{
              fontFamily: 'NotoSerifTC-SemiBold',
              fontSize: 25,
              marginBottom: 20,
            }}>
            Välkommen till Preggy!
            </Text>
          <Button 
            bordered 
            block
            onPress={() => navigation.navigate('LogIn')}>
            <Text>Logga In</Text>
          </Button>
        </View>
      </Container>
    )
  }
}


