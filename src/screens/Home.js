/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Title } from 'react-native-paper';
import Header from '../components/Header';

function Home(props) {

    const [info, setInfo] = useState({
        name: 'loading...',
        temp: 'loading...',
        humidity: 'loading...',
        desc: 'loading...',
        icon: 'loading...',
    });

    const getWeather = () => {
        let MyCity;
        const { city } = props.route.params;
        MyCity = city;
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${MyCity}&appid=5c7dd70a7accf4441abdd8513acb99b8&units=metrics`, {
            method: 'GET',
        })
            .then(data => data.json())
            .then(results => {
                //console.log(results);
                setInfo({
                    name: results.name,
                    temp: results.main.temp,
                    humidity: results.main.humidity,
                    desc: results.weather[0].description,
                    icon: results.weather[0].icon,
                });
            });
    };

    useEffect(() => {
        getWeather();
    }, []);

    if (props.route.params.city !== 'London') {
        getWeather();
    }

    return (
        <View style={styles.container}>
            <Header title="Weather" />
            <View style={styles.infoView}>
                <Title style={styles.title}>{info.name}</Title>
                <Image style={styles.img} source={{ uri: `https://openweathermap.org/img/w/${info.icon}.png` }} />
                <Text style={styles.text}>Temperature - {info.temp}</Text>
                <Text style={styles.text}>Humidity - {info.humidity}</Text>
                <Text style={styles.text}>Description - {info.desc}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#263238',
    },
    infoView: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: '#eee',
        fontSize: 30,
    },
    text: {
        color: '#B0BEC5',
    },
    img: {
        width: 50,
        height: 50,
    },
});

export default Home;
