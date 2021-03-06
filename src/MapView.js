import MapView, { Marker } from 'react-native-maps';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import React, { Fragment } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import { Button } from 'react-native-elements';


const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 210,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        height:210,
        ...StyleSheet.absoluteFillObject,
    },
});
export default class Maps extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showMarker: 'false',
            focusedLocation:{
                latitude: 37.7875711,
                longitude: -122.3966922,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            },
            markers: [{
                des: 'Hi Adam', name: 'Yo', LatLng: {
                    latitude: 37.7875711, longitude: -122.3966922,
                }
            }, {
                des: 'the hooks feature is amazing', name: 'whatsup', LatLng: {
                    latitude: 38.7875711, longitude: -122.3966922,
                }
            }],
        }
    }
    pickLocationHandler=event=>{
        const coords=event.nativeEvent.coordinate;
        console.log(coords);
        this.map.animateToRegion({
            ...this.state.focusedLocation,
            latitude:coords.latitude,
            longitude:coords.longitude,
        })
        this.setState({
            ...this.state,
            focusedLocation:{
                latitude:coords.latitude,
                longitude:coords.longitude
            }
        })
    }
    getGeolocationHandler=()=>{
        navigator.geolocation.getCurrentPosition(pos=>{
            console.log(pos);
            const coordsEvent={
                nativeEvent:{
                    coordinate:{
                        latitude:pos.coords.latitude,
                        longitude:pos.coords.longitude
                    }
                }
            }
            this.pickLocationHandler(coordsEvent);
        });

    }
    render() {
        console.log(this.props);
        return (
            <View style={styles.container}>
                <MapView
                    // remove if not using Google Maps
                    style={styles.map}
                    ref={(ref)=>this.map=ref}
                    
                    initialRegion={{
                        latitude: 37.7875711,
                        longitude: -122.3966922,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}

                    onPress={this.pickLocationHandler}
                >{(
                    <MapView.Marker
                        coordinate={this.state.focusedLocation}
                        title='Yo'
                        description="This thing is amazing"
                    />
                )}
                </MapView>
                <Button title='locate me ' onPress={this.getGeolocationHandler}></Button>
            </View>
        )
    };
}