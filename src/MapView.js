import MapView,{Marker}from 'react-native-maps';
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


const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: 400,
      width: 400,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
   });
export default class Maps extends React.Component{
    constructor(props){
        super(props);
        
        this.state={
            showMarker:'false',
            markers: [{ des: 'Hi Adam', name: 'Yo' ,LatLng:{
                latitude: 37.7875711, longitude: -122.3966922, 
            }}, {  des: 'the hooks feature is amazing', name: 'whatsup' ,LatLng:{
                latitude: 38.7875711, longitude: -122.3966922,
            }}],
        }
    }
    render(){
        console.log(this.props);
    return(
<View style={styles.container}>
     <MapView
// remove if not using Google Maps
       style={styles.map}
       region={{
         latitude: 37.7875711,
         longitude: -122.3966922,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >{(
        <MapView.Marker 
            coordinate={{
                latitude: 37.7875711,
                longitude: -122.3966922,
            }}
            title='Yo'
            description="This thing is amazing"
        />
     )}



     </MapView>
   </View>
    )
 };
}