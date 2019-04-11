import React, { Component } from 'react'
import { Button, Text, Container, View } from 'native-base';

import MainHeader from '../MainHeader';

export default class EnterName extends Component {
  static navigationOptions = {
    header: null,
    drawerLockMode: 'locked-closed',
  };
  render() {
    const { navigation } = this.props;
    const name = navigation.getParam('name');

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
          }}
        >
          <View>
            <Text
              style={{
                fontFamily: 'NotoSerifTC-Regular',
                fontSize: 20,
                textAlign: 'center',
              }}
            >
              Vem är du?
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <Button style={{ marginHorizontal: 10, marginTop: 13 }}
                bordered dark
                onPress={() => navigation.navigate('SetupDueDate', {
                  relation: 'mamma',
                  name,
                })}
              >
                <Text>Mamma</Text>
              </Button>
              <Button disabled bordered
                style={{ marginHorizontal: 10, marginTop: 13 }}
              >
                <Text>Partner</Text>
              </Button>
              <Button disabled bordered
                style={{ marginHorizontal: 10, marginTop: 13 }}
              >
                <Text>Vän</Text>
              </Button>
            </View>
          </View>
        </Container>
      </Container>
    )
  }
}

