import React, {Component} from 'react'
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

export default class LogIn extends Component {
    // static navigationOptions = {
    //     header: null,
    //   };
    constructor(props) {
      super(props)
      this.state = {
        title: '',
        content: 'data is loading',
      }
    }
    /* async componentDidMount() {
      const result = await preggyService.getWeek(12);
      this.setState({title: result.title, content: result.content});
    } */

    render() {
    const {navigate} = this.props.navigation;
      return (
        <View style={styles.container}>
        <Text>Enter e-mail address:</Text>
        <TextInput placeholder="john@appleseed.com"></TextInput>
        <Text>Enter password:</Text>
        <TextInput placeholder="password"></TextInput>
        <Button
            title="Next"
            onPress={() => navigate('EnterName')}
        />
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
  });
