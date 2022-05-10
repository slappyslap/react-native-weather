import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import PropTypes from "prop-types";
import openWeatherMapService from "../services/openWeatherMapService";
import ForecastItem from "./ForecastItem";
import view from "react-native-web/dist/exports/View";

const Forecast = ({id}) => {
    const [forecast, setForecast] = useState([])
    const [city, setCity] = useState(null)

    const updateWeather = () => {
        setForecast([]);

        openWeatherMapService.forecast(id).then((data) => {
            setCity(data.city);
            setForecast(data.list);
        })
    }

    useEffect(() => {
      updateWeather();
    }, []);

    return (
        <View style={styles.container}>
            {forecast.length != 0 ?
                (
                    <View style={styles.scrollView}>
                        <ScrollView horizontal={true}>
                            {
                                forecast.map((item, index) => (
                                    <ForecastItem item={item} city={city} key={index}/>
                                ))
                            }
                        </ScrollView>
                    </View>
                ) : (
                    <View style={styles.loading}>
                        <ActivityIndicator size="large" color="#000" />
                    </View>
                ) }

            <Button
                onPress={updateWeather}
                title="Mise a jour prévision"
                color="#2980b9"
            />
        </View>
    );
}

Forecast.propTypes = {
    id: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        marginTop: 30,
    },
    scrollView: {
        height: 160,
    },
    loading: {
        alignItems: "center",
        justifyContent: "center",
        height: 160
    }
});

export default Forecast;
