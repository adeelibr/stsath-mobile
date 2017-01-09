import React, { Component } from 'react';
import { 
	StyleSheet, 
	View, 
} from 'react-native';

import { Container, Content, List, ListItem, Text, Icon, Badge } from 'native-base';


import { Style, StyleConstants, Fonts, Images } from '../theme';

let Sidebar = (props) => {

	let goToScreen = (id) => {
		navigator.push({ id: id });
	};

	return (
		<Container>
      <Content>
        <List>
          <ListItem iconLeft>
            <Icon name="ios-aperture-outline" style={styles.icon} />
            <Text style={styles.menuName}>Dashboard</Text>
          </ListItem>
          <ListItem iconLeft>
            <Icon name="ios-search-outline" style={styles.icon} />
            <Text style={styles.menuName}>Search</Text>
          </ListItem>
          <ListItem iconLeft onPress={goToScreen(2)}>
            <Icon name="ios-log-out" style={styles.icon} />
            <Text style={styles.menuName}>Signout</Text>
          </ListItem>
       	</List>
      </Content>
    </Container>
	);
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: StyleConstants.secondary,
  },

  icon: {
  	color: StyleConstants.primary
  },

  menuName: {
  	color: StyleConstants.primary,
  },
  

});


export default Sidebar;