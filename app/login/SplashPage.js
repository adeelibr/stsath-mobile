import React, { Component } from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  View,
  Image,
  AsyncStorage
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import { Style, StyleConstants, Fonts, Images } from '../theme';

const minDuration = 1000;
const maxDuration = 1500;

export default class Splash extends Component {

  constructor (props) {
    super(props);
    this.state = {
    	logged: false,
    }
  }

  componentDidMount () {
  	AsyncStorage.getItem('token')
  	.then((token) => {
  		if (token) {
  			this.setState({ logged: true });
  		} else {
  			this.setState({ logged: false });
  		}
  	})
  	.done();
    setTimeout( this.goToScreen , 2000);
  }

  goToScreen = () => {
    let {navigator} = this.props;
    let {logged} = this.state;
    logged ? navigator.push({ id: 4 }) : navigator.push({ id: 2 });
  }

  randomNumber = (min, max) => {
		return Math.random() * max + min;
	}

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.imageStyle}
          resizeMode={'contain'}
          source={Images.logo}
        />
				<ActivityIndicator
					animating={true}
					style={{alignItems: 'center', justifyContent: 'center', top: 125}}
					color={StyleConstants.secondary}
					size="large"
				/>
	  		<View style={{flexDirection:'row', justifyContent:'space-around', top: -25}} >
					<Animatable.View // Circle3
						animation="zoomOut"
			  		duration={this.randomNumber(minDuration, maxDuration)}
			  		easing="ease-in"
            style={styles.Circle3}>
					</Animatable.View>

          <Animatable.View // Circle1
						animation="zoomOut"
			  		duration={this.randomNumber(minDuration, maxDuration)}
			  		easing="ease-in"
						style={styles.Circle1}>
					</Animatable.View>

          <Animatable.View // Circle2
						animation="zoomOut"
			  		duration={this.randomNumber(minDuration, maxDuration)}
			  		easing="ease-in"
		        style={styles.Circle2}>
					</Animatable.View>
        </View>
			</View>
    );
  }

}

const styles = StyleSheet.create({

	container: {
		flex: 1,
		backgroundColor: StyleConstants.primary,
		justifyContent: 'center',
	},

	imageStyle: {
		top: 75,
		alignSelf: 'center',
		width: 260,
		height: 88,
		resizeMode: 'contain',
	},

	Circle1: {
		opacity: 1,
		top: -85,
		left: -50,
		width: 200,
		height: 200,
		borderRadius: 100,
		backgroundColor: StyleConstants.primary,
	},

	Circle2: {
		opacity: 1,
		width: 150,
		height: 150,
		borderRadius: 80,
		backgroundColor: StyleConstants.primary,
	},

	Circle3: {
		opacity: 1,
		top: -40,
		left: -50,
		width: 250,
		height: 250,
		borderRadius: 125,
		backgroundColor: StyleConstants.primary,
	},

});
