import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Container, Header, Title, Button, Icon, Content } from 'native-base';


export default class Splash extends Component {
  render() {
    return (
      <Container>
          <Header>
              <Button transparent>
                  <Icon name='ios-arrow-back' />
              </Button>
              <Title>Header</Title>
              <Button transparent>
                  <Icon name='ios-menu' />
              </Button>
          </Header>

          <Content>
              <Text>Yo This Is Looking Good</Text>
          </Content>
      </Container>
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
  center: {
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
