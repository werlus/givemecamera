/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => Node = () => {

  return (
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center'}}> 
        <Camera />
        <Image 
          source={{ uri: 'https://play-lh.googleusercontent.com/r5sOR7RqM9jJelyeU-FlYgmnnXqgO4OtfJ1-_SfPbNn9RaLDBZ2aEvfcwOIXaIV--_w'}}
          style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', textAlign: 'center'}}    
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
