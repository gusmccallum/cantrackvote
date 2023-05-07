import * as Location from 'expo-location';

export async function getLong(address) {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
    }
    Location.geocodeAsync(address).then( result => {
        console.log(result[0].longitude);
    }).catch(error => {
        console.log(`mapservice error: ${error}`);
    })
}
