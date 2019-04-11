import React, { Component } from 'react'
import { Button, Text, Container, View, Input, Item } from 'native-base';

import MainHeader from '../MainHeader';

export default class EnterName extends Component {
  static navigationOptions = {
    header: null,
    drawerLockMode: 'locked-closed',
  };

  state = {
    name: '',
  }

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <MainHeader
          navigation={navigation}
          menu={false}
        />
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
          <View style={{ width: 300 }}>
            <Text
              style={{
                fontFamily: 'NotoSerifTC-Regular',
                fontSize: 20,
                textAlign: 'center',
              }}
            >
              Ditt namn:
            </Text>
            <Item>
              <Input
                placeholder="Sara"
                onChange={(e) =>
                  this.setState({ name: e.nativeEvent.text }
                  )}
              >
                {this.state.name}
              </Input>
            </Item>
            <Button
              bordered block
              style={{ marginTop: 20 }}
              onPress={() => {
                if (this.state.name) {
                  navigation.navigate('Relation', { name: this.state.name })
                }
              }}
            >
              <Text>Nästa</Text>
            </Button>
          </View>
        </View>
      </Container>
    )
  }
}
