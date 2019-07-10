import { createStackNavigator, createAppContainer } from 'react-navigation';

import React, {Fragment} from 'react';
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
import {Ionicons } from '@expo/vector-icons';
import {Font} from 'expo';
import TabContainer from './tab/tabScreen'
export default class PhotoPage extends React.Component{
    static navigationOptions={
        headerLeft:<Ionicons name='ios-camera' size={32} style={{paddingLeft:10}}/>,
        title:'Instagram',
        headerRight:<Ionicons name='ios-send' size={32} style={{paddingRight:10}} />
    }
    render(){
        return (
                <TabContainer />
        );
    }
}
