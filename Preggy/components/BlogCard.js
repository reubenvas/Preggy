import React, { Component } from 'react'
import { Button, Text, Card, CardItem } from 'native-base';
import { Image } from 'react-native';

export default class BlogCard extends Component {
  render() {
    console.log(this.props.blogData);
    const { week, blogger, url, image } = this.props.blogData;
    return (
      <Card
        style={{
          width: 280,
          borderRadius: 10
        }}
      >
        <CardItem
          style={{
            flexDirection: 'column',
            alignItems: 'flex-start',
            borderRadius: 10
          }}
        >
          <Text style={{ fontSize: 13, textTransform: 'uppercase'}}>
            {blogger}
          </Text>
          <Text note style={{ fontSize: 12 }}>
            Vecka {week}
          </Text>
        </CardItem>
        <CardItem style={{ flexDirection: 'column' }}>
          <Image
            source={{ uri: image }}
            style={{
              height: 150,
              width: 240,
              flex: 1,
              borderRadius: 10,
            }}
          />
        </CardItem>
        <CardItem
          style={{
            flexDirection: 'column',
            borderRadius: 10
          }}
        >
          <Text
            style={{
              flex: 1,
              fontSize: 14,
            }}
          >
            Se vad {blogger} skriver om sin graviditet i vecka {week}.
            </Text>
          <Button transparent onPress={() => this.props.navigate('BlogFrame', { url })}>
            <Text
              style={{
                textDecorationLine: 'underline',
                fontSize: 14
              }}
            >
              Läs mer
            </Text>
          </Button>
        </CardItem>
      </Card>
    )
  }
}
