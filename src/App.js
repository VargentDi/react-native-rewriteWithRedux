import React from 'react';
import { registerRootComponent, AppLoading } from 'expo';

import { createStackNavigator, createAppContainer } from 'react-navigation';
import {Font} from 'expo';
import {connect} from 'react-redux';
import {addPlace,deletePlace,selectPlace,deselectPlace} from './store/actions/index'
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



import MainPageScreen from './MainPageScreen';

import HomeScreen from './HomeScreen'
import PhotoPage from './PhotoAlbum';


const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Details: MainPageScreen,
        Photo:PhotoPage,
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions:{
            headerStyle:{
                backgroundColor:"#1e90ff",
                
            },
            headerTintColor:'#fff',
            headerTitleStyle:{
                textAlign:'center',
                flex:1,
            }
        }
    }
);

const AppContainer = createAppContainer(RootStack);

 class App extends React.Component {
    state={
        fontLoaded:false
    }
    componentDidMount() {
        this._loadAssetsAsync();
      }
      _loadAssetsAsync = async () => {
        await Font.loadAsync({
          'Satisfy-Regular': require('../assets/fonts/Satisfy-Regular.ttf')
        })
        this.setState({fontLoaded:true});
      }
    render() {
        if(!this.state.fontLoaded){
            return <AppLoading />
        }
        return (
        <AppContainer />);
    }
}


registerRootComponent(App);