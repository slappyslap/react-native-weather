import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {View, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        marginTop: 150,
        height: 200,
        width: 400,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default ({lat, lon}) => (
    <View style={styles.container}>
        <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            region={{
                latitude: lat,
                longitude: lon,
                latitudeDelta: 0.050,
                longitudeDelta: 0.0121,
            }}
        >
            <Marker
                coordinate={{ latitude : lat , longitude : lon }}
                title="Votre position"
            />
        </MapView>
    </View>
);