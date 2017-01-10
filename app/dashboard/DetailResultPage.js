import React, { Component } from 'react';
import { StyleSheet, View, DrawerLayoutAndroid } from 'react-native';
import { 
	Container, Content, 
  Header, Title, 
	Card, CardItem, Thumbnail,
	Text,
	Button, Icon 
} from 'native-base';

import { Style, StyleConstants, Fonts, Images } from '../theme';
import Sidebar from '../common/Sidebar';
import Tweetlist from './components/Tweetlist';

export default class DetailResult extends Component {
  
  constructor (props) {
  	super(props);
  }

  openDrawer = () => {
    this.drawer.openDrawer();
  }

  render () {
    let {navigator, tweets} = this.props;

    let renderTweetList = () => {
      return tweets.map((obj, i) => {
        return (<Tweetlist obj={obj} key={i} />);
      });
    };

    return (
      <DrawerLayoutAndroid
        ref={(ref) => this.drawer = ref}
        drawerWidth={StyleConstants.drawerWidth}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => <Sidebar navigator={navigator} />}
      >
        <Container style={styles.container}>
          <Content>
            <Header>
              <Button transparent onPress={() => { navigator.pop(); }}>
                <Icon name='md-arrow-round-back'/>
              </Button>
              <Title>Detail Result</Title>
              <Button transparent onPress={this.openDrawer}>
                <Icon name='ios-menu'/>
              </Button>
            </Header>

            {renderTweetList()}
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
    // marginHorizontal: 3,
  },
});