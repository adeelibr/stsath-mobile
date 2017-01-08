import React, { Component } from 'react';
import {
	Navigator,
	AppRegistry,
} from 'react-native';

import routes from './routes';
import configureScene from './configureScene';

export default class STSATHMobile extends Component {

  _renderScene(route, navigator) {
    let data = {
      name: 'adeel'
    };
    return routes(route, navigator, data)
  }

	render() {
		return(
			<Navigator
				initialRoute = {{ id: 1 }}
				renderScene = {this._renderScene}
				props = {{ cards: '' }}
				configureScene = {(route) => configureScene(route)}
			/>
		);
	}
}

AppRegistry.registerComponent('STSATHMobile', () => STSATHMobile);
