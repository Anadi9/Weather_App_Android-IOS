/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Search from './src/screens/Search';


const App = () => {
  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor="#eee" />
      <Search/>
    </View>
  );
};

const styles = StyleSheet.create({
});

export default App;
