import MapView from 'react-native-maps';
import {StyleSheet, View} from "react-native";

const MpMap = ({long, lat, deltaLong, deltaLat}) => {

    return (
        <View style={styles.container}>
            <MapView/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})