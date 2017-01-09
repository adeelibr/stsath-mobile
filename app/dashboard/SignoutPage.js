import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';

export default class SignoutPage extends Component {

  constructor (props) {
    super(props);
  }

  componentWillMount () {
  	AsyncStorage.removeItem('token');
    let { navigator } = this.props;
    navigator.push({ id: 2 });
  }

  render() {
    return (
      <View>
        <Text>Bye</Text>
      </View>
    );
  }
}

