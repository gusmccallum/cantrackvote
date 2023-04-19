import {useState} from 'react';

import { StyleSheet, View, Text, TextInput, SafeAreaView } from 'react-native';
const FindMyMpScreen = ({name, id}) => {
    const [long, setLong] = useState(-75.6981200);
    const [lat, setLat] = useState(45.4111700);
    return (

        <SafeAreaView style={styles.container}>

            <MapView style={styles.map} />
            <View>
                <TextInput autoFocus={true} placeholder={'Enter Address or Postal Code.'}/>
            </View>
        </SafeAreaView>
    )
};

export default FindMyMpScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center'
    },
    map: {
        width: '95%',
        height: '60%',
        borderRadius: 5

    },
});