import Carousel from 'react-native-snap-carousel';
import React, { Component } from 'react';
import { Card, CardItem, Left, Body, Text } from 'native-base';

export class Offers extends Component {
    constructor(props) {
        super(props);
        this._carousel = {};
        this.state = {
            offers:
                [
                    {offer: '20% Barnvagn', brand: 'Bugaboo'},
                    {offer: '15% Barnsängar', brand: 'Jollyroom'},
                    {offer: '10% Nappflaskor', brand: 'Philips Avent'},
                ],
        };
    }

    _renderItem = ({ item }) => {
        return (
            <Card style={{ width: 280, padding: 20, borderRadius: 10 }}>
              <CardItem style={{ flexDirection: 'column' }}>
                <Left>
                  <Body>
                    <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 14, textTransform: 'uppercase' }}>{item.offer}</Text>
                    <Text note style={{ fontFamily: 'Roboto-Light', fontSize: 14, textTransform: 'uppercase' }}>{item.brand}</Text>
                  </Body>
                </Left>
              </CardItem>
            </Card>
        );
    }

    render() {
        return (
            <Carousel
                ref={(c) => { this._carousel = c; }}
                data={this.state.offers}
                renderItem={this._renderItem.bind(this)}
                sliderWidth={800}
                itemWidth={280}
                layout={'default'}
            />
        );
    }
}