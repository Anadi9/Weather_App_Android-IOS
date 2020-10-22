/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { TextInput, Button, Card } from 'react-native-paper';
import Header from '../components/Header';

function Search({navigation}) {

    const [city, setCity] = useState('');

    const [cities, setCities] = useState([]);

    const fetchCities = (text) => {
        setCity(text);
        fetch(`https://api.weather.com/v3/location/search?apiKey=6532d6454b8aa370768e63d6ba5a832e&language=en-US&query=${text}&locationType=city&format=json`, {
            method: 'GET',
        })
            .then(item => item.json())
            .then(cityData => {
                setCities(cityData.location.address);
                console.log(cityData.location.address);
            });
    };

    const btnClick = () => {
        navigation.navigate('Home', { city: city });
    };

    const listClick = (cityName) => {
        setCity(cityName);
        navigation.navigate('Home', { city: cityName });
    }

    return (
        <View style={styles.container}>
            <Header title="Search"/>
            <View style={styles.search}>
                <TextInput theme={{colors: {primary: '#00C853'}}} label="City Name" placeholder="Search city..." vale={city} onChangeText={(text)=>fetchCities(text)} />
                <Button icon="magnify" mode="contained" style={styles.searchbtn} onPress={()=>btnClick()}>
                    Search
                </Button>
            </View>
            <FlatList data={cities} renderItem={({item}) => (
                <TouchableOpacity style={styles.listItem} onPress={()=>listClick(item.name)}>
                        <Text style={styles.item}>{item}</Text>
                    </TouchableOpacity>
            )} keyExtractor={item=>item} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#263238',
    },
    search: {
        margin: 20,
    },
    searchbtn: {
        margin: 5,
        width: 130,
        backgroundColor: '#00C853',
    },
    listItem: {
        margin: 2,
        padding: 12,
        backgroundColor: '#000',
    },
    item: {
        color: '#eee',
    },
});

export default Search;
