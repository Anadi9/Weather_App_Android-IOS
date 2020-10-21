/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';

function Search(props) {
    return (
        <View style={styles.container}>
            <Header title="Search"/>
            <Text style={styles.search}>search screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    search: {
        marginTop: 60,
    },
});

export default Search;
