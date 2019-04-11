import React, { Component } from 'react';
import { Container, View, Text, Content } from 'native-base';
import MainHeader from '../MainHeader';
import styles from '../../styles';

export default class Notifications extends Component {
    render() {
        return (
            <Container>
                <MainHeader
                    navigation={this.props.navigation}
                />
                <Content style={{ backgroundColor: 'rgb(251,246,247)' }}>
                    <View style={styles.center}>
                        <Text style={{fontSize: 20, marginTop: 30}}>
                            Notiser
                        </Text>
                    </View>
                </Content>
            </Container>
        )
    }
}
