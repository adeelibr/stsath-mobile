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

import SignupAPI from '../api/SignupAPI';

export default class SignupPage extends Component {

  constructor (props) {
    super(props);
    this.state = {
      success: false,
      errors: {},
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
    let { username, first_name, last_name, email, password, confirmPassword } = this.state;
    let body = { username, first_name, last_name, email, password, confirmPassword };

    SignupAPI(body)
      .then((res) => {
        console.log(res);
        if (!res.success) {
          const errors = res.errors ? res.errors : {};
          errors.summary = res.message;
          this.setState({ errors, success: false });
        } else {
          this.setState({ success: res.success, errors: {} });
        }
      })
      .catch((error) => {
        console.log('Error Is: ', error);
      })
  }

  render() {
    let {username, first_name, last_name, email, password, confirmPassword} = this.state;
    let { errors, success } = this.state;
    let usernameInvalid = errors.username ? true : false;
    let fnameInvalid = errors.first_name ? true : false;
    let lnameInvalid = errors.last_name ? true : false;
    let emailInvalid = errors.email ? true : false;
    let passwordInvalid = errors.password ? true : false;
    let cPassInvalid = errors.confirmPassword ? true : false;

    let message = 'Account Has Been Created! Go To Login Page To Access It';

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
              {success && <Text style={Style.successMsg}>{message}</Text>}
              {errors.summary && <Text style={Style.errorMsg}>{errors.summary}</Text>}
              <ListItem>
                <InputGroup borderType='regular' error={usernameInvalid} >
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
                <InputGroup borderType='regular' error={fnameInvalid} >
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
                <InputGroup borderType='regular' error={lnameInvalid} >
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
                <InputGroup borderType='regular' error={emailInvalid} >
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
                <InputGroup borderType='regular' error={passwordInvalid} >
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
                <InputGroup borderType='regular' error={cPassInvalid} >
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
              <Button style={styles.button} info onPress={this.processForm}>
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
