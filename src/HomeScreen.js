/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import { createStackNavigator, createAppContainer } from 'react-navigation';
import firebase from 'firebase';
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
import { Font } from 'expo';
import firebaseConfig from '../config'
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  }
  state={
    email:'',
    password:'',
    signUpError:'',
    signInError:''
  }
  componentDidMount(){
    
  }
  _rest=()=>{
    this.setState({signInError:'',signUpError:''})
  }
  _submitLogin=()=>{
    // firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
    // .catch((error)=>{
    //   if(error){
    //     this.setState({signInError:error})
    //   }
    // })
    // .then(()=>{
    //   if(this.state.signInError){
    //     alert(`${this.state.signInError}`)
    //   }else{

    //     this._routeToMainPage();
    //   }
    // })
    this._routeToMainPage();
  }
  _submitSignUp=()=>{
  //   firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
  //   .catch((error) =>{
  // // Handle Errors here.
  // if(error){

  //   this.setState({signUpError:error});

  // }
  // var errorCode = error.code;
  // var errorMessage = error.message;
  // if (errorCode == 'auth/weak-password') {
  //   alert('The password is too weak. you may want to change it !');
  // } else {
  //   alert(errorMessage);
  // }
  // console.log(error);
  // }).then(()=>{
  //   if(this.state.signUpError){
  //     alert(`${this.state.signUpError}`)

  //   }
  //   else{

  //     this._routeToMainPage()
  //   }
    
  // })
  this._routeToMainPage();
  };
  _routeToMainPage=()=>{
    this.props.navigation.navigate('Details');
    this._rest();
  }
  render() {


    return (

      <View style={styles.container}>
        <Text style={styles.welcome}> welcome</Text>
        <Text style={styles.subHeader}>Record your lovely trip</Text>
        <TextInput style={styles.input} placeholder="Username@"  value={this.state.email} onChangeText={(text)=>{this.setState({email:text})}}></TextInput>
        <TextInput style={styles.input} placeholder="Password" secureTextEntry value={this.state.password} onChangeText={(text)=>{this.setState({password:text})}}></TextInput>
        <View style={styles.btnConatiner}>
          <TouchableOpacity style={styles.userBtn}
            onPress={() => this._submitLogin()}
          >
            <Text style={styles.btnTxt}>
              Login
          </Text>

          </TouchableOpacity>
          <TouchableOpacity style={styles.userBtn} onPress={()=>{this._submitSignUp()}}>
            <Text style={styles.btnTxt}>
              Sign Up
          </Text>

          </TouchableOpacity>
        </View>
      </View>
    )
  };
};

const styles = StyleSheet.create({

  input: {
    width: "70%",
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 35,
    fontFamily: 'Satisfy-Regular',
  },
  subHeader: {
    fontSize: 25,
    fontFamily: 'Satisfy-Regular',
  },
  btnConatiner: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "70%"
  },
  userBtn: {
    backgroundColor: "#FFD700",
    padding: 15,
    width: "35%",
  },
  btnTxt: {
    fontSize: 18,
    textAlign: "center",
  },



});

export default HomeScreen;
