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
    Button
} from 'react-native';
import Maps from "./MapView"
import ThreeAxisSensor from 'expo-sensors/build/ThreeAxisSensor';
export default class DetailsScreen extends React.Component {
    constructor(){
        super();
        this.state={
            showMap:false,
            textInput:'',
        }
    }
    static navigationOptions=({navigation})=>({
        title:"Main Page",
        headerRight:(
            <Button
            onPress={() => navigation.navigate('Photo')}
            title="Detail">
                
            </Button>
        )
    })

    render() {
        return (
            <ScrollView>

            <View style={styles.header}>
                <Text style={styles.headerText}>Make Memory with Your long and forever !</Text>
            </View>
            <View style={styles.header}>
                <TextInput style={styles.textInput} placeholder="Search Your memory location" value={this.state.textInput} onChangeText={(value)=>{this.setState({textInput:value})}} onEndEditing={()=>{this.setState({showMap:true})}}></TextInput>
            </View>
            <View style={styles.contentConatiner}>
            {this.state.showMap&&<Maps />}
            </View>
            <View style={styles.header}>
                <Text style={styles.headerText}>The Placer you have visited</Text>
            </View>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Photo')}>

                <Text>Hack Reactor At galazine</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>



        )
    };
};
const styles=StyleSheet.create({
    header:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',

        padding:10
    },
    headerText:{
        fontSize:20,
        fontFamily:'Satisfy-Regular',
    },
    textInput:{
        width:'50%'
    },
    contentConatiner:{
        height:410,
    }
})