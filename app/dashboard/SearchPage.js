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
      username: '',
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  componentDidMount () {
  	AsyncStorage.removeItem('token');
  }

  goToLoginPage = () => {
    let {navigator} = this.props;
    dismissKeyboard();
    navigator.push({ id: 5 });
  }

  processForm = () => {
    let {username, first_name, last_name, email, password, confirmPassword} = this.state;
    let body = {
      username,
      first_name,
      last_name,
      email,
      password,
      confirmPassword
    };
    console.log(body);
  }

  render() {
    let {username, first_name, last_name, email, password, confirmPassword} = this.state;

    return (
      <View style={styles.container}>
        <Header>
          <Button transparent onPress={this.goToLoginPage}>
            <Icon name='ios-arrow-back' />
          </Button>
          <Title>Signup</Title>
        </Header>

        <Content>

          <View style={{flex: 1}}>

            <View style={styles.buttonGroup}>
              <Button style={styles.button} info>
                Signin
              </Button>
            </View>

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
  
  form: {
    alignSelf: 'center', 
    width: width*0.7, 
    marginTop: height*0.1, 
  },

  buttonGroup: {
    // flex: 1,
    flexDirection: 'row',
    alignSelf: 'center', 
    alignItems: 'center', 
    marginTop: 20,
    marginBottom: height*0.1,
  },

  button: {
    marginHorizontal: 10,
  },

  text: {
    color: StyleConstants.primary,
  },

});
