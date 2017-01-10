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
import SearchAPI from '../api/SearchAPI';
import Report from './components/Report';

export default class SearchPage extends Component {

  constructor (props) {
    super(props);
    this.state = {
    	showSpinner: false,
    	word: '',
    	token: '',
    	info: {},
    };
  }

  componentDidMount () {
  	AsyncStorage.getItem('token')
  		.then((token) => this.setState({ token }))
  		.catch((error) => {
  			console.log('Error in SearchPage.js ComponentDidMount ', error);
  		});
  }

  openDrawer = () => {
    this.drawer.openDrawer();
  }

  processForm = () => {
  	let {word, token} = this.state;
  	// console.log(this.state.word);
  	this.setState({ success: false, showSpinner: true });

  	SearchAPI(word, token)
      .then((res) => {
        // console.log(res);
        if (!res.success) {
          const errors = res.errors ? res.errors : {};
          errors.summary = res.message;
          this.setState({ 
        		success: false, errors, showSpinner: false 
          });
        } else {
          this.setState({ 
        		success: res.success, errors: {}, info: res, showSpinner: false 
          });
        }
      })
      .catch((error) => {
        console.log('Error Is: ', error);
      })	
  }

  render() {
  	let {navigator} = this.props;
  	let {word, success, info, showSpinner} = this.state;

  	let renderSpinner = () => {
  		return (
  			<View style={Style.center}>
  				{showSpinner && <Spinner color={StyleConstants.primary}/>}
  			</View>
  		);
  	}

  	let renderReport = () => { 
  		return success ? <Report data={info} navigator={navigator}/> : <View/> 
  	};

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
            <Header searchBar rounded>
	            <InputGroup>
	              <Icon name="ios-search" style={Style.icon}/>
	              <Input 
	              	ref={(ref) => this.word = ref}
	              	placeholder="Search A Word .."
	                value={word}
	                onChangeText={(word) => { this.setState({ word }) }}
	                onSubmitEditing={this.processForm}
	                blurOnSubmit={true}
	                returnKeyType="done" 
              	/>
	              <Icon name="ios-beaker" style={Style.icon}/>
	            </InputGroup>
	            <Button transparent onPress={this.processForm}>
	              Search
	            </Button>
          	</Header>

            {renderSpinner()}
            {renderReport()}

            <View style={styles.bottomSpace} />
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
    backgroundColor: StyleConstants.secondary,
  },

  bottomSpace: {
    marginVertical: 5,
  },

});
