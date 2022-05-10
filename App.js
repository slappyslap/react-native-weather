import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import {useEffect, useState} from "react";
import * as Location from 'expo-location';
import openWeatherMapService from "./src/services/openWeatherMapService";
import Weather from "./src/Components/Weather";

export default function App() {

    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setError('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location)

            openWeatherMapService.find(location.coords.latitude, location.coords.longitude).then((data) => {
                setWeather(data);
            })
        })();
    }, []);

    return (
        <View style={styles.container}>
            {weather ? (
                    <Weather weather={weather} location={location}/>
                ) : (
                    <View style={styles.loading}>
                        <ActivityIndicator size="large" color="#000" />
                        <Text>Chargement...</Text>
                    </View>
            )}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loading: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});
