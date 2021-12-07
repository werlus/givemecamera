import React from 'react';
import type {Node} from 'react';
import Camera from './camera';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  View,
} from 'react-native';
import DECK from './Deck.js';
import DisplayCard from './DisplayCard.js';

// Logic component - takes pic and passes it into ML to identify cards
// Build another component that passes info back to app


class PassToApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        deck: DECK,
      };
  }
  render () {
    const cardLoop = DECK.map((card) => {
      return (
        <DisplayCards value={card.value} auralString={card.auralString}/>             
        );
    });
      
    return (
      <View>{cardLoop}</View>        
    );
  }
}

class PassToBlackBox extends React.Component {
  
  
  // take Deck.length to get # of IDs
  // generates random number within .length range
  // returns card.index and alter App to return aural string
}

const App: () => Node = () => {

  return (
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center'}}> 
        <Camera />
        <Image 
          source={{ uri: 'https://play-lh.googleusercontent.com/r5sOR7RqM9jJelyeU-FlYgmnnXqgO4OtfJ1-_SfPbNn9RaLDBZ2aEvfcwOIXaIV--_w'}}
          style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', textAlign: 'center'}} 
          onPress={() => this.PassToBlackBox}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
