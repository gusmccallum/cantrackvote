import {useState} from 'react';

import { StyleSheet, View, Text, TextInput, SafeAreaView } from 'react-native';
import MpMap from "../Components/MpMap";
import MapView from "react-native-maps";
import MapTextInput from "../Components/MapTextInput";
const FindMyMpScreen = ({name, id}) => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inputContainer}>
                <MapTextInput/>

            </View>
            <MpMap/>


        </SafeAreaView>
    )
};

export default FindMyMpScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    inputContainer: {
        marginTop: 12,
        flexDirection: 'column'
    }

});