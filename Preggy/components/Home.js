import React, { Component, Image } from 'react';
import { Button, Text, Container, View, Content, CardItem, Card, Left, Body, Thumbnail } from 'native-base';
import ProgressCircle from './ProgressCircle';
import MainHeader from './MainHeader';
import { BlogCarousel } from './Carousel';
import { Offers } from './OffersCarousel';

import MotherImage from '../assets/images/mother.png';
import BabyImage from '../assets/images/baby.png';
import PartnerImage from '../assets/images/partner.png';


export default class Home extends Component {

  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigate } = this.props.navigation;
    let { name, currentWeek, tagLine, timePregnant, daysPassed } = this.props;

    calculatePercentage = () => {
      return parseInt((daysPassed / 280) * 100);
    }

    daysRemaining = () => {
      return 280 - daysPassed;
    }

    return (
      <Container >
        <MainHeader
          navigation={this.props.navigation}
          back={false}
        />
        <Content style={{ backgroundColor: 'rgb(251,246,247)' }}>
          <View style={{
            flex: 1,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          >
            <Text
              style={{
                fontSize: 25,
                marginTop: 10
              }}
            >
              Hej {name}!
              </Text>
            <Text
              style={{
                fontSize: 16,
                marginTop: 10,
                marginBottom: 20
              }}
            >
              {tagLine}
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ marginHorizontal: 30, textAlign: 'center' }}>
                <Text style={{ marginTop: 40, fontSize: 24 }}>
                  {calculatePercentage()} %
                </Text>
                <Text style={{ fontSize: 12, textTransform: 'uppercase' }}>
                  Avklarat
                </Text>
              </View>
              <ProgressCircle
                style={{ marginTop: 20 }}
                timePregnant={timePregnant}
                currentWeek={currentWeek}
                percentage={calculatePercentage()} />
              <View style={{ marginHorizontal: 30, textAlign: 'center', }}>
                <Text style={{ marginTop: 40, fontSize: 24 }}>{daysRemaining()}</Text>
                <Text style={{ fontSize: 12, textTransform: 'uppercase' }}>Dagar kvar</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', marginVertical: 30 }}>

              <Button transparent
                style={{ margin: 20 }}
                onPress={() => navigate('WeekInfo', {
                  currentWeek,
                })}
              >
                <Thumbnail source={BabyImage}/>
              </Button>

              <Button transparent
                style={{ margin: 20 }}
                onPress={() => navigate('WeekInfo', {
                  currentWeek,
                })}
              >
                <Thumbnail source={MotherImage}/>
              </Button>

              <Button transparent
                style={{ margin: 20 }}
                onPress={() => navigate('WeekInfo', {
                  currentWeek,
                })}
              >
                <Thumbnail source={PartnerImage}/>
              </Button>
            </View>
            <Text style={{ fontSize: 18, marginBottom: 10 }}>
              Vecka {currentWeek} i Sociala Medier
            </Text>
            <BlogCarousel navigate={navigate} week={currentWeek} />
            <Text style={{ fontSize: 18, marginTop: 20, marginBottom: 10 }}>Veckans Deal</Text>
            <Card style={{ width: 280, padding: 20, borderRadius: 10 }}>
              <CardItem style={{ flexDirection: 'column' }}>
                <Left>
                  <Body>
                    <Text style={{ fontSize: 14, textTransform: 'uppercase' }}>Barnförsäkring 25%</Text>
                    <Text note style={{ fontSize: 14, textTransform: 'uppercase' }}>Trygghansa</Text>
                  </Body>
                </Left>
              </CardItem>
            </Card>
            <Text style={{ fontSize: 18, marginTop: 20, marginBottom: 10 }}>
              Erbjudanden
            </Text>
            <Offers />
          </View>
        </Content>
      </Container>
    )
  }
}
