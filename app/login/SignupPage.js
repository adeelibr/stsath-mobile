import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native';
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

  goToLoginPage = () => {
    let {navigator} = this.props;
    dismissKeyboard();
    navigator.push({ id: 2 });
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
            <List style={styles.form}>
              <ListItem>
                <InputGroup borderType='regular'>
                  <Icon name="ios-contact-outline" style={{ color: StyleConstants.primary }} />
                  <Input 
                    ref="username"
                    placeholder="Username"
                    value={username}
                    onChangeText={(username) => { this.setState({ username }) }}
                    blurOnSubmit={false}
                    onSubmitEditing={(event) => {
                      this.refs.FirstName._textInput.focus();
                    }}
                    returnKeyType="next"
                  />
                </InputGroup>
              </ListItem>
              <ListItem>
                <InputGroup borderType='regular'>
                  <Icon name="ios-person-outline" style={{ color: StyleConstants.primary }} />
                  <Input 
                    ref='FirstName'
                    placeholder="First Name" 
                    value={first_name}
                    onChangeText={(first_name) => { this.setState({ first_name }) }}
                    blurOnSubmit={false}
                    onSubmitEditing={(event) => {
                      this.refs.LastName._textInput.focus();
                    }}
                    returnKeyType="next"
                  />
                </InputGroup>
              </ListItem>
              <ListItem>
                <InputGroup borderType='regular'>
                  <Icon name="ios-person-outline" style={{ color: StyleConstants.primary }} />
                  <Input
                    ref={'LastName'}
                    placeholder="Last Name"
                    value={last_name}
                    onChangeText={(last_name) => { this.setState({ last_name }) }}
                    blurOnSubmit={false}
                    onSubmitEditing={(event) => {
                      this.refs.Email._textInput.focus();
                    }}
                    returnKeyType="next"
                  />
                </InputGroup>
              </ListItem>
              <ListItem>
                <InputGroup borderType='regular'>
                  <Icon name="ios-mail-outline" style={{ color: StyleConstants.primary }} />
                  <Input
                    ref={'Email'}
                    placeholder="Email"
                    value={email}
                    onChangeText={(email) => { this.setState({ email }) }}
                    onSubmitEditing={(event) => {
                      this.refs.Password._textInput.focus();
                    }}
                    keyboardType={'email-address'}
                    returnKeyType="next"
                  />
                </InputGroup>
              </ListItem>
              <ListItem>
                <InputGroup borderType='regular'>
                  <Icon name="ios-lock-outline" style={{ color: StyleConstants.primary }} />
                  <Input
                    ref={'Password'}
                    placeholder="Password" 
                    secureTextEntry
                    onChangeText={(password) => { this.setState({ password }) }}
                    onSubmitEditing={(event) => {
                      this.refs.ConfirmPassword._textInput.focus();
                    }}
                    returnKeyType="next"
                  />
                </InputGroup>
              </ListItem>
              <ListItem>
                <InputGroup borderType='regular'>
                  <Icon name="ios-lock-outline" style={{ color: StyleConstants.primary }} />
                  <Input
                    ref={'ConfirmPassword'}
                    placeholder="Confirm Password" 
                    secureTextEntry
                    onChangeText={(confirmPassword) => { this.setState({ confirmPassword }) }}
                    onSubmitEditing={this.processForm}
                    returnKeyType="done"
                  />
                </InputGroup>
              </ListItem>
            </List>   
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
