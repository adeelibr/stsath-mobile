import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity, AsyncStorage } from 'react-native';
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

const dismissKeyboard = require('dismissKeyboard');
const {height, width} = Dimensions.get('window');
import { Style, StyleConstants, Fonts, Images } from '../theme';


export default class SignupPage extends Component {

  constructor (props) {
    super(props);
    this.state = {
    	word: '',
    };
  }

  componentDidMount () {
  	// AsyncStorage.removeItem('token');
  }

  processForm = () => {
    // Something
  }

  render() {
    let {username, first_name, last_name, email, password, confirmPassword} = this.state;

    return (
      <View style={styles.container}>
        <Header>
          <Button transparent>
            <Icon name='ios-arrow-back' />
          </Button>
          <Title>Smart Twitter Sentiment</Title>
          <Button transparent>
            <Icon name='ios-menu' />
          </Button>
        </Header>

        <Content>

          <View style={{flex: 1}}>
            <TouchableOpacity style={Style.btnDefault} onPress={this.goToLoginPage}>
              <Text style={[Style.f16, styles.text]}>Already Have An Account? Sign In</Text>
            </TouchableOpacity>
          </View>
        
        </Content>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: StyleConstants.secondary,
  },
  

});
