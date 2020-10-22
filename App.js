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
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/Home';
import Search from './src/screens/Search';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();


const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#263238" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = 'home-city';
              } else if (route.name === 'Search') {
                iconName = 'magnify-scan';
              }
              return <Icon name={iconName} size={25} color={color} />
             },
          })}
          tabBarOptions={{activeTintColor: '#00C853', inactiveTintColor: 'grey', activeBackgroundColor: '#000', inactiveBackgroundColor: '#000'}}
        >
          <Tab.Screen name="Home" component={Home} initialParams={{city: 'London'}} />
          <Tab.Screen name="Search" component={Search} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#263238',
  },
});

export default App;
