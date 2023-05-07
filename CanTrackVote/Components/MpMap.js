import MapView from 'react-native-maps';
import {StyleSheet, View} from "react-native";

const MpMap = () => {

    return (
        <View style={styles.container}>
            <MapView style={styles.map}/>
        </View>
    )
}

export default MpMap;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 32
    },
    map: {
        width: '100%',
        height: '60%',

    }
})