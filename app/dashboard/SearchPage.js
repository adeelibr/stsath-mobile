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
	Header, Title, 
	Content,
	Button, Icon, 
	InputGroup, Input,
	Text,
	Spinner, 
} from 'native-base';

const dismissKeyboard = require('dismissKeyboard');
const {height, width} = Dimensions.get('window');
import { Style, StyleConstants, Fonts, Images } from '../theme';

import Sidebar from '../common/Sidebar';

export default class SearchPage extends Component {

  constructor (props) {
    super(props);
    this.state = {
    	showSpinner: false,
    	word: '',
    };
  }

  openDrawer = () => {
    this.drawer.openDrawer();
  }

  processForm = () => {
  	console.log(this.state.word);
  	this.setState({ showSpinner: true });	
  }

  render() {
  	let {navigator} = this.props;
  	let {word} = this.state;

  	let renderReport = () => {
  		return (
  			<Text>This is report</Text>
  		);
  	};

  	let renderSpinner = () => {
  		let {showSpinner} = this.state;
  		return (
  			<View style={Style.center}>
  				{showSpinner && <Spinner color={StyleConstants.primary}/>}
  			</View>
  		);
  	}

    return (
    	<DrawerLayoutAndroid
    		ref={(ref) => this.drawer = ref}
	      drawerWidth={StyleConstants.drawerWidth}
	      drawerPosition={DrawerLayoutAndroid.positions.Left}
	      renderNavigationView={() => <Sidebar navigator={navigator} />}
      >
	      <Container style={styles.container}>
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
	          <InputGroup iconRight>
              <Icon name='ios-search-outline' style={Style.icon} />
              <Input 
              	ref={(ref) => this.word = ref}
              	placeholder="Search A Word .."
                value={word}
                onChangeText={(word) => { this.setState({ word }) }}
                onSubmitEditing={this.processForm}
                blurOnSubmit={true}
                returnKeyType="done" 
              />
            </InputGroup>

            {renderSpinner()}
	        </Content>
	      </Container>
      </DrawerLayoutAndroid>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: StyleConstants.secondary,
  },
});
