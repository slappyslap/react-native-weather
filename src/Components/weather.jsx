import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import {weatherConditions} from "../services/weatherConditions";

const Weather = ({ weather, temperature }) => {

    console.log(weather);

    function ucFirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <View
            style={[
                styles.weatherContainer,
                { backgroundColor: weatherConditions[weather.weather[0].main].color }
            ]}
        >
            <View  style={styles.headerContainer}>
                <Text style={styles.cityText}>{weather.name}</Text>
                <View style={styles.header}>
                    <MaterialCommunityIcons
                        size={32}
                        name={weatherConditions[weather.weather[0].main].icon}
                        color={'#fff'}
                    />
                    <Text style={styles.tempText}>{weather.main.temp}˚C</Text>
                </View>
                <Text style={styles.description}>{ucFirst(weather.weather[0].description)}</Text>
            </View>
            <View style={styles.bodyContainer}>
                <Text style={styles.title}>{weatherConditions[weather.weather[0].main].title}</Text>
                <Text style={styles.subtitle}>
                    {weatherConditions[weather.weather[0].main].subtitle}
                </Text>
            </View>
        </View>
    );
};

Weather.propTypes = {
    weather: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
    weatherContainer: {
        flex: 1
    },
    headerContainer: {
        flexDirection: 'column',
        paddingLeft: 25,
        marginTop: 40,
    },
    description: {
        fontSize: 24,
        color: '#fff'
    },
    header:{
        flexDirection: "row",
        alignItems: 'center',
    },
    tempText: {
        fontSize: 32,
        color: '#fff'
    },
    cityText: {
        fontSize: 72,
        color: '#fff'
    },
    bodyContainer: {
        flex: 2,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft: 25,
        marginBottom: 40
    },
    title: {
        fontSize: 60,
        color: '#fff'
    },
    subtitle: {
        fontSize: 24,
        color: '#fff'
    }
});

export default Weather;