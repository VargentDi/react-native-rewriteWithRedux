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
    Image,
    
  } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Button } from 'react-native-elements';
import {Permissions,Constants} from 'expo';
import  firebase from 'firebase';


export default class SettingsScreen extends React.Component {
    state={
        image:null,
    }
    componentDidMount(){
        this.gerPermissionAsync();
    }
    _pickImage= async ()=>{
        let result=await ImagePicker.launchImageLibraryAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.All,
            allowsEditing:true,
            aspect:[4,3],
        })
        console.log(result);
        if(!result.cancelled){
            this.uploadImageFireBase(result.uri)
            .then(()=>{
                alert('success')
            })
            .catch(err=>{
                alert('failed');
            })
            this.setState({
                image:result.uri,
            })
        }
    }
    uploadImageFireBase= async(uri)=>{
        const response=await fetch(uri);
        const blob=await response.blob();
        var ref=firebase.storage().ref().child('my-image');
        return ref.put(blob);
    }
    gerPermissionAsync=async ()=>{
        if(Constants.platform.ios){
            const {status}= await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if(status!=='granted'){
                alert('sorry, we need permissions to pick the photos')
            }
        }
    }
    render() {
        const {image}=this.state
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Button title='pick an image from library' 
          onPress={this._pickImage}
          style={{padding:10}}
          ></Button>
          {image&&<Image source={{uri:image}} style={{width:200, height:200}}/>}


        </View>
      );
    }
  }