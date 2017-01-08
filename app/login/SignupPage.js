import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  Container,
  Header, Title,
  Content,
  Button,
  Icon,
  Text,
  List, ListItem,
  InputGroup, Input
} from 'native-base';

import { Style, StyleConstants, Fonts, Images } from '../theme';

export default class SignupPage extends Component {
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

            <List style={{ marginTop: 100, width: 250, alignSelf: 'center' }}>
              <ListItem>
                <InputGroup>
                  <Icon name="ios-person" style={{ color: StyleConstants.primary }} />
                  <Input placeholder="Username" />
                </InputGroup>
              </ListItem>
              <ListItem>
                <InputGroup>
                  <Icon name="ios-unlock" style={{ color: StyleConstants.primary }} />
                  <Input placeholder="Password" secureTextEntry />
                </InputGroup>
              </ListItem>
            </List>

            <Button style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
              Login
            </Button>
            <Text>Don't Have An Account Signup?</Text>

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
});
