import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { 
	Card, CardItem, Thumbnail,
  Text,
} from 'native-base';

import { Style, StyleConstants, Fonts, Images } from '../../theme';

export default class Report extends Component {
  
  constructor (props) {
  	super(props);
  	this.state = {
  		show: false,
  	};
  }

  toggleState = () => {
    this.setState({ show: !this.state.show });
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
  	let {show} = this.state;
  	let {obj} = this.props;

    let renderSentiment = () => {
      if (show) {
        return (
          <CardItem onPress={this.toggleState}>
            <Text style={Style.b}>Sentiment Details</Text>
            <Text note>Score: {obj.sentiment.score}</Text>
            <Text note>Comparative: {obj.sentiment.comparative}</Text>
            <Text note>Tokens: {this.renderWords(obj.sentiment.tokens)}</Text>
            <Text note>Words Matched: {this.renderWords(obj.sentiment.words)}</Text>
            <Text note>Positive Words: {this.renderWords(obj.sentiment.positive)}</Text>
            <Text note>Negative Words: {this.renderWords(obj.sentiment.negative)}</Text>
          </CardItem>
        );
      }
    };

    return (
      <Card>
        <CardItem onPress={this.toggleState}>
         
          <View style={styles.body}>
            <View style={styles.thumbnail}>
              <Thumbnail source={{uri: obj.tweet.user.profile_image_url}} />
            </View>
            <View style={styles.text}>
              <Text><Text style={Style.b}>Tweet:</Text> {obj.tweet.text}</Text>
              <Text note><Text style={Style.b}>Status Posted At:</Text> {obj.tweet.created_at}</Text>
            </View>
          </View>

          <Text note><Text style={Style.b}>Person Name:</Text> {obj.tweet.user.name}</Text>
          <Text note><Text style={Style.b}>User Since:</Text> {obj.tweet.user.created_at}</Text>
          {renderSentiment()}
        </CardItem>
     </Card>
    );
  }
}

const styles = StyleSheet.create({
  
  body: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  thumbnail: {
    flex: 0.1,
  },

  text: {
    flex: 0.9,
    paddingHorizontal: 5,
  },

});