import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { 
	Container, Content, 
	Card, CardItem,
	List, ListItem, 
	Text,
	Button, Icon 
} from 'native-base';

import { Style, StyleConstants, Fonts, Images } from '../../theme';

export default class Report extends Component {
  
  constructor (props) {
  	super(props);
  	this.state = {
  		data: this.props.data,
  	};
  }

  analysis = () => {
  	let {data} = this.state;
  	if (data.success) { return this.showInfographic(data.infographic); }
  }

  showInfographic = (info) => {
  	let wordsCount = info.positiveWordsCount + info.negativeWordsCount;
  	return (
  		<List>
        <ListItem>
          <Text>
          	<Text style={Style.b}>Total Words Found: </Text> 
          	{wordsCount}
          </Text>
        </ListItem>
        <ListItem>
          <Text>
          	<Text style={Style.b}>Total Positive Words Found: </Text> 
          	{info.positiveWordsCount}
          </Text>
        </ListItem>
        <ListItem>
          <Text>
          	<Text style={Style.b}>Positive Words: </Text> 
          	{this.renderWords(info.positiveWords)}
          </Text>
        </ListItem>
        <ListItem>
          <Text>
          	<Text style={Style.b}>Total Negative Words Found: </Text> 
          	{info.negativeWordsCount}
          </Text>
        </ListItem>
        <ListItem>
          <Text>
          	<Text style={Style.b}>Negative Words: </Text> 
          	{this.renderWords(info.negativeWords)}
          </Text>
        </ListItem>
      </List>
  	);
  }

  renderWords = (words) => {
  	if (words.length === 0) {
      return (<Text> No Words Found :( </Text>);
    }
    return words.map((word, i) => {
      if (i !== words.length) {
        return (<Text key={i}>{word} ,</Text>);
      } else {
        return (<Text key={i}>{word}</Text>);
      }
    });
  }

  render() {
  	let {navigator} = this.props;
  	let {data} = this.state.data;

    return (
      <Container style={styles.container}>
        <Content>
          <Card>
          	<CardItem header>
          		<Icon name="ios-cube" style={Style.icon} />
              <Text>Report</Text>
            </CardItem>
            <CardItem>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
			          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed 
			          pellentesque pellentesque lobortis odio.
              </Text>
            </CardItem>
          </Card>
          {this.analysis()}
          <Button block info iconRight 
	          onPress={() => { 
	          	navigator.push({ id: 7, tweets: data }) 
	          }}
	          >
	          	Show Detailed Result
	          	<Icon name='ios-arrow-forward' />
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: StyleConstants.secondary,
    marginHorizontal: 3,
  },
});