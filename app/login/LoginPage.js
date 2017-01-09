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

const {height, width} = Dimensions.get('window');
import { Style, StyleConstants, Fonts, Images } from '../theme';

export default class LoginPage extends Component {
  
  constructor (props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  goToSignupPage = () => {
    let {navigator} = this.props;
    navigator.push({ id: 3 });
  }

  processForm = () => {
    let {username, password} = this.state;
    let body = {
      username,
      password
    };
    console.log(body);
  }

  render() {
    let { username, password } = this.state;

    return (
      <View style={styles.container}>
        <Content>

          <View style={{flex: 1}}>
            <List style={styles.form}>
              <ListItem>
                <InputGroup borderType='regular'>
                  <Icon name="ios-contact-outline" style={{ color: StyleConstants.primary }} />
                  <Input
                    ref={'username'}
                    placeholder="Username"
                    value={username}
                    onChangeText={(username) => { this.setState({ username }) }}
                    // onSubmitEditing={this.goToNextField('password')}
                    returnKeyType="next" 
                  />
                </InputGroup>
              </ListItem>
              <ListItem>
                <InputGroup borderType='regular'>
                  <Icon name="ios-lock-outline" style={{ color: StyleConstants.primary }} />
                  <Input
                    ref={'password'}
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
