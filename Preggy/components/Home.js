import React, { Component } from 'react';
import styles from '../styles';
import { Button, Text, Container, View, Content, CardItem, Card, Left, Body} from 'native-base';
import ProgressCircle from './ProgressCircle';
import MainHeader from './MainHeader';
import { BlogCarousel } from './Carousel';

export default class Home extends Component {

  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigate } = this.props.navigation;
    const {name, currentWeek, tagLine, timePregnant, daysPassed} = this.props;
    
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
        <Content style={{backgroundColor: 'rgb(251,246,247)'}}>
          <View style={styles.center}>
            <Text style={{fontFamily: 'NotoSerifTC-SemiBold', fontSize: 25, marginTop: 10}}>Hej {name}!</Text>
            <Text style={{fontFamily: 'Roboto-Light', fontSize: 14, marginTop: 10, marginBottom: 20}}>{tagLine}</Text>
            <View style={styles.row}>
              <View style={{marginHorizontal: 30, textAlign: 'center'}}>
                <Text style={{marginTop: 40}}>{calculatePercentage()} %</Text>
                <Text style={{fontSize: 10}}>AVKLARAT</Text>
              </View>
              <ProgressCircle 
                style={styles.topMargin} 
                timePregnant={timePregnant} 
                currentWeek={currentWeek}
                percentage={calculatePercentage()}/>
              <View style={{marginHorizontal: 30, textAlign: 'center',}}>
                <Text style={{marginTop: 40}}>{daysRemaining()}</Text>
                <Text style={{fontSize: 10}}>DAGAR KVAR</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', marginVertical: 30}}>
            
            <Button bordered 
              style={{ margin: 5}}
              onPress={() => navigate('WeekInfo', {
                currentWeek,
              })}
              >
              <Text>Bebis</Text>
            </Button>

            <Button bordered 
              style={{ margin: 5}}
              onPress={() => navigate('WeekInfo', {
                currentWeek,
              })}
              >
              <Text>Mamma</Text>
            </Button>

            <Button bordered 
              style={{ margin: 5}}
              onPress={() => navigate('WeekInfo', {
                currentWeek,
              })}
              >
              <Text>Partner</Text>
            </Button>
              </View>
              <Text style={{marginBottom: 10}}>Bloggar</Text>
              <BlogCarousel />
              <Text style={{marginTop: 30, marginBottom: 10}}>Veckans Deal Vecka {currentWeek}</Text>
              <Card style={{width: 300, padding: 20, borderRadius: 10}}>
                <CardItem style={{flexDirection: 'column'}}>
                  <Left>
                    <Body>
                      <Text>BARNFÖRSÄKRING 25%</Text>
                      <Text note>TRYGGHANSA</Text>
                    </Body>
                  </Left>
                </CardItem>
              </Card>
      
          </View>
        </Content>
      </Container>
    )
  }
}
