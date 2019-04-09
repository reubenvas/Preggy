import React, { Component } from 'react'
import { Button, Text, Container, View, Input, Item } from 'native-base';
import styles from '../../styles';

import MainHeader from '../MainHeader';

export default class EnterName extends Component {
  static navigationOptions = {
    header: null,
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
        <Container style={styles.center}>
          <View style={styles.center} style={styles.card}>
            <Text style={styles.text}>Ditt namn:</Text>
            <Item>
              <Input placeholder="Sara" onChange={(e) => this.setState({ name: e.nativeEvent.text })}>{this.state.name}</Input>
            </Item>
            <Button
              bordered block
              style={styles.topMargin}
              onPress={() => {
                if (this.state.name) {
                  navigation.navigate('Relation', {
                    name: this.state.name
                  })
                }
              }
              }
            >
              <Text>Nästa</Text>
            </Button>
          </View>
        </Container>
      </Container>
    )
  }
}

