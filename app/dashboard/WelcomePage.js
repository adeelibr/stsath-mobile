import React, { Component } from 'react';
import { 
	StyleSheet, 
	View, 
	Dimensions, 
	DrawerLayoutAndroid, 
	AsyncStorage 
} from 'react-native';

import { 
	Container, 
	Header, Title, Content,
	Button, Icon, 
	Card, CardItem, 
	Text 
} from 'native-base';

const dismissKeyboard = require('dismissKeyboard');
const {height, width} = Dimensions.get('window');
import * as Animatable from 'react-native-animatable';

import { Style, StyleConstants, Fonts, Images } from '../theme';

import Sidebar from '../common/Sidebar';

export default class WelcomePage extends Component {

  componentDidMount () {
  	// AsyncStorage.removeItem('token');
  }

  openDrawer = () => {
    this.drawer.openDrawer();
  }

  render() {
  	let {navigator} = this.props;

    return (
    	<DrawerLayoutAndroid
    		ref={(ref) => this.drawer = ref}
	      drawerWidth={StyleConstants.drawerWidth}
	      drawerPosition={DrawerLayoutAndroid.positions.Left}
	      renderNavigationView={() => <Sidebar navigator={navigator} />}
      >
	      <View style={styles.container}>
	        <Header>
	          <Button transparent>
	            <Icon name='ios-trending-up'/>
	          </Button>
	          <Title>Smart Twitter Sentiment</Title>
	          <Button transparent onPress={this.openDrawer}>
	            <Icon name='ios-menu'/>
	          </Button>
	        </Header>

	        <Content>
	          <Card>
	          	<CardItem header>
	          		<Animatable.View
									animation="pulse"
						  		duration={1500}
						  		easing="ease-in"
					      >                        
	              	<Text>Welcome To Stsath!</Text>
	              </Animatable.View>
	            </CardItem>
	            <CardItem>                        
	              <Text>
	            		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
	            		et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
	            		aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
	            		dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
	            		officia deserunt mollit anim id est laborum.     	
	              </Text>
	            </CardItem>
	            <CardItem header>                        
	              <Text>Stsath Team</Text>
	            </CardItem>
	          </Card>
	        </Content>
	      </View>
      </DrawerLayoutAndroid>
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
