import {StyleSheet, View, TextInput, Pressable} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import {useState} from "react";
import * as MapService from '../Services/MapService'
import * as ApiService from '../Services/ApiService'


const MapTextInput = () => {
    const [address, setAddress] = useState('');
    const [textInput, setTextInput] = useState('');

    async function getLocalMp() {

        setAddress(textInput);
        console.log(address);
        console.log(ApiService.getLongLat(address));

    }
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View>
                    <TextInput
                        placeholder="Enter Address or Postal Code"
                        onChangeText={newText => setTextInput(newText)}/>
                </View>
                <View>
                    <Pressable onPress={getLocalMp}>
                        <Ionicons name="md-search" size={32} color="black" />
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default MapTextInput;
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16
    },
    innerContainer: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#000000',
        paddingHorizontal: 16,
        justifyContent: 'space-between'
    }
});