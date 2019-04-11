import React, { Component } from 'react';
import { Button, Text, Container, View, Content, CardItem, Card, Left, Body } from 'native-base';
import ProgressCircle from './ProgressCircle';
import MainHeader from './MainHeader';
import { BlogCarousel } from './Carousel';
import { Offers } from './OffersCarousel';

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
                fontFamily: 'NotoSerifTC-SemiBold',
                fontSize: 25,
                marginTop: 10
              }}
            >
              Hej {name}!
              </Text>
            <Text
              style={{
                fontFamily: 'Roboto-Light',
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

              <Button bordered
                style={{ margin: 5 }}
                onPress={() => navigate('WeekInfo', {
                  currentWeek,
                })}
              >
                <Text>Bebis</Text>
              </Button>

              <Button bordered
                style={{ margin: 5 }}
                onPress={() => navigate('WeekInfo', {
                  currentWeek,
                })}
              >
                <Text>Mamma</Text>
              </Button>

              <Button bordered
                style={{ margin: 5 }}
                onPress={() => navigate('WeekInfo', {
                  currentWeek,
                })}
              >
                <Text>Partner</Text>
              </Button>
            </View>
            <Text style={{ fontFamily: 'NotoSerifTC-Medium', fontSize: 18, marginBottom: 10 }}>
              Vecka {currentWeek} i Sociala Medier
            </Text>
            <BlogCarousel navigate={navigate} week={currentWeek} />
            <Text style={{ fontFamily: 'NotoSerifTC-Medium', fontSize: 18, marginTop: 20, marginBottom: 10 }}>Veckans Deal</Text>
            <Card style={{ width: 280, padding: 20, borderRadius: 10 }}>
              <CardItem style={{ flexDirection: 'column' }}>
                <Left>
                  <Body>
                    <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 14, textTransform: 'uppercase' }}>Barnförsäkring 25%</Text>
                    <Text note style={{ fontFamily: 'Roboto-Light', fontSize: 14, textTransform: 'uppercase' }}>Trygghansa</Text>
                  </Body>
                </Left>
              </CardItem>
            </Card>
            <Text style={{ fontFamily: 'NotoSerifTC-Medium', fontSize: 18, marginTop: 20, marginBottom: 10 }}>
              Erbjudanden
            </Text>
            <Offers />
          </View>
        </Content>
      </Container>
    )
  }
}
