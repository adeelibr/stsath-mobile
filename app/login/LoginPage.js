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

import LoginAPI from '../api/LoginAPI';

export default class LoginPage extends Component {
  
  constructor (props) {
    super(props);
    this.state = {
      errors: {},
      username: '',
      password: '',
    };
  }

  goToSignupPage = () => {
    let {navigator} = this.props;
    dismissKeyboard();
    navigator.push({ id: 3 });
  }

  processForm = () => {
    let {username, password} = this.state;
    let { navigator } = this.props;
    let body = { username, password };

    LoginAPI(body)
      .then((res) => {
        console.log(res);
        if (!res.success) {
          const errors = res.errors ? res.errors : {};
          errors.summary = res.message;
          this.setState({ errors });
        } else {
          AsyncStorage.setItem('token', res.token);
          navigator.push({ id: 4 });
        }
      })
      .catch((error) => {
        console.log('Error Is: ', error);
      })
  }

  render() {
    let { username, password, errors } = this.state;
    let usernameInvalid = errors.username ? true : false;
    let passwordInvalid = errors.password ? true : false;

    return (
      <View style={styles.container}>
        <Content>

          <View style={{flex: 1}}>
            <List style={styles.form}>
              {errors.summary && <Text style={Style.errorMsg}>{errors.summary}</Text>}
              <ListItem>
                <InputGroup borderType='regular' error={usernameInvalid} >
                  <Icon name="ios-contact-outline" style={{ color: StyleConstants.primary }} />
                  <Input
                    ref={'Username'}
                    placeholder="Username"
                    value={username}
                    onChangeText={(username) => { this.setState({ username }) }}
                    onSubmitEditing={(event) => {
                      this.refs.Password._textInput.focus();
                    }}
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
                    value={password}
                    onChangeText={(password) => { this.setState({ password }) }}
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

            <TouchableOpacity style={Style.btnDefault} onPress={this.goToSignupPage}>
              <Text style={[Style.f16, styles.text]}>Don't Have An Account? Signup</Text>
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
    marginTop: height*0.2, 
  },

  buttonGroup: {
    // flex: 1,
    flexDirection: 'row',
    alignSelf: 'center', 
    alignItems: 'center', 
    marginTop: 20,
    marginBottom: height*0.3,
  },

  button: {
    marginHorizontal: 10,
  },

  text: {
    color: StyleConstants.primary,
  },

});
