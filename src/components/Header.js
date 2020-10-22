/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearTextGradient } from 'react-native-text-gradient';
import { Appbar, Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function Header({title}) {

  return (
      <Appbar.Header style={styles.appbar}>
      <Icon name="weather-partly-snowy-rainy" color="#fff" size={35} style={styles.logo} />
          <LinearTextGradient style={styles.title} locations={[0, 1]} colors={['#00E5FF', '#00C853']} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} >
              <Title>{title}</Title>
          </LinearTextGradient>
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
    appbar: {
        backgroundColor: '#000',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    logo: {
        color: '#eee',
    },
    title: {
        fontFamily: 'roboto',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default Header;
