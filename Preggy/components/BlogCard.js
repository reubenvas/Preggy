import React, { Component } from 'react'
import { Button, Text, Card, CardItem } from 'native-base';
import { Image } from 'react-native';

export default class BlogCard extends Component {
 

  render() {
    return (
        <Card style={{width: 300, padding: 20, borderRadius: 10}}>
        <Text style={{fontSize: 12}}> MICHAELA FORNI </Text>
        <Text note style={{fontSize: 10, marginBottom: 15}}> 3 dagar sedan </Text>
        <CardItem style={{flexDirection: 'column'}}>
            <Image source={{uri: 'https://forni.se/wp-content/uploads/2019/04/IMG_4948-e1554131798494.jpg'}} style={styles.image}/>
        </CardItem>
        <CardItem style={{flexDirection: 'column'}}>
            <Text style={{flex: 1, padding: 8, fontSize: 12}}>Min kropp reagerar mer och mer på stress för varje vecka in i graviditeten.</Text>
          <Button transparent>
            <Text style={{textDecorationLine: 'underline', fontSize: 12}}>Läs mer</Text>
          </Button>
        </CardItem>
      </Card>
    )
  }
}
