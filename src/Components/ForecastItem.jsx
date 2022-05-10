import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PropTypes from "prop-types";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {weatherConditions} from "../services/weatherConditions";

const ForecastItem = ({item, city}) => {

    const formatDate = (seconds, tz) => {
        let date = new Date(null);
        date.setSeconds(seconds + tz);
        return date.toLocaleDateString();
    }

    const formatTime = (seconds, tz) => {
        let date = new Date(null);
        date.setSeconds(seconds + tz);
        return date.toISOString().substr(11, 8);
    }


    return (
        <View style={[styles.card, { backgroundColor: weatherConditions[item.weather[0].main].color}]}>
            <MaterialCommunityIcons
                size={25}
                name={weatherConditions[item.weather[0].main].icon}
                color={'#fff'}
            />
            <Text style={styles.tempText}>{item.main.temp} °C</Text>

            <Text style={styles.dtText}>{formatTime(item.dt, city.timezone)}</Text>
            <Text style={styles.dtText}>{formatDate(item.dt, city.timezone)}</Text>

            <Text style={styles.description}>{item.weather[0].description}</Text>
        </View>
    );
}

ForecastItem.propTypes = {
    item: PropTypes.object.isRequired,
    city: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        width: 100,
        padding: 10,
        margin: 5,
        borderRadius: 5,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#fff",
        height: 150
    },
    tempText: {
        color: '#FFF',
        marginBottom: 10
    },
    dtText: {
        color: '#FFF'
    },
    description: {
        color: '#FFF',
        marginTop: 10,
        fontSize: 10,
        textAlign: "center"
    }
});

export default ForecastItem;
