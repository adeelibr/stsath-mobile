import React, { Component } from 'react';
import { 
	StyleSheet, 
	View, 
} from 'react-native';

import { Container, Content, List, ListItem, Text, Icon, Badge } from 'native-base';


import { Style, StyleConstants, Fonts, Images } from '../theme';

let Sidebar = ({ navigator }) => {

	return (
		<Container style={styles.container}>
      <Content>
        <List>
          <ListItem iconLeft onPress={() => { navigator.push({ id: 4 }) }}>
            <Icon name="ios-aperture-outline" style={Style.icon} />
            <Text style={styles.menuName}>Dashboard</Text>
          </ListItem>
          <ListItem iconLeft onPress={() => { navigator.push({ id: 6 }) }}>
            <Icon name="ios-search-outline" style={Style.icon} />
            <Text style={styles.menuName}>Search</Text>
          </ListItem>
          <ListItem iconLeft onPress={() => { navigator.push({ id: 5 }) }}>
            <Icon name="ios-log-out" style={Style.icon} />
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
  
  menuName: {
  	color: StyleConstants.primary,
  },
  

});


export default Sidebar;