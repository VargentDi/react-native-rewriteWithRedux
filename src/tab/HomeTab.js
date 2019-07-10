'use strict';

import { createStackNavigator, createAppContainer } from 'react-navigation';

import React, { Fragment } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    List,
    Text,
    FlatList,
    Button,
    TextInput,
    ListView,
    TouchableOpacity,
    StatusBar,

} from 'react-native';
import { ListItem ,SearchBar} from 'react-native-elements';
import ListDetail from './ListDetail';
export default class HomeTab extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            places: '',
            ListPlaces: [],
            demoData: [],
            page: 1,
            seed: 1,
            error: null,
            refreshing: false,
            loading: false,
            ListSearchValue:null,
            selectList:null,
        }
    }
    componentDidMount() {
        this.makeRemoteRequest()
        
    }
    makeRemoteRequest = () => {
        const { page, seed } = this.state;
        const demoUrl = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
        this.setState({ loading: true, });
        fetch(demoUrl)
            .then(res => res.json())
            .then(data => {console.log(data.results);this.setState({ demoData: data.results })})
            .catch(error => {
                this.setState({ error, loading: false });
            })
    }
    renderSearchHeader=()=>{
        return (
            <SearchBar 
            placeholder='TypeHere'
            lightTheme
            round
            onChangeText={text=>this.searchFilterFlatList(text)}
            value={this.state.ListSearchValue}
            autoCorrect={false}
            />
        )
    }
    searchFilterFlatList=(text)=>{
        this.setState({
            searchFilterFlatList:text
        })
        const newDemodata=this.state.demoData.filter(item=>{
            const itemData=`${item.name.first.toUpperCase()} ${item.name.last.toUpperCase()} ${item.email.toUpperCase()}`
            const textData=text.toUpperCase();
            return itemData.indexOf(textData)>-1;
        })
        this.setState({demoData:newDemodata})
    }
    selectListItem=(item)=>{

        this.setState({
            selectList:item
        })


    }
    selectListDeleteHandler=()=>{
        this.setState({
            ...this.state,
            demoData:this.state.demoData.filter(item=>{
                return item.email!==this.state.selectList.email;
            }),
            selectList:null,
        })
    }
    modalCloseHandler=()=>{
        this.setState({
            selectList:null,
        })
    }
    render() {


        return (
            <View >
                {/* <View style={styles.topPart}>


                    <View>
                        <TextInput style={styles.textinput} placeholder='type in your marker location ' value={this.state.places} onChangeText={(value) => this.handlerInputChange(value)}></TextInput>
                    </View>
                    <View>
                        <Button title='add' style={{ width: '30%' }} onPress={this.handlerSubmit}></Button>
                    </View>

                </View> */}
                <View>
                    <ListDetail 
                    selectList={this.state.selectList}
                    onSelectDeleted={this.selectListDeleteHandler}
                    onModalClose={this.modalCloseHandler}
                    />
                
                    <FlatList
                        data={this.state.demoData}
                        renderItem={({ item ,index}) => 
                            (
                            <ListItem 
                            leftAvatar={{source:{url:item.picture.thumbnail}}}
                            key={index}
                            title={`${item.name.first} ${item.name.last}`}
                            onPress={()=>this.selectListItem(item)}
                            subtitle={item.email}
                            />
                        )
                        }
                        ItemSeparatorComponent={()=>{
                            return(
                                <View 
                                style={{
                                    height:1,
                                    width:'86%',
                                    backgroundColor:'#CED0CE',
                                    marginLeft:'14%',
                                }}
                                />
                            )
                        }

                        }
                        ListHeaderComponent={this.renderSearchHeader}
                    />
                </View>
                
            </View>


        )
    }



}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 26,
        alignItems: 'center',

        justifyContent: 'flex-start',
        backgroundColor: '#FFFFFF',
    },
    textinput: {
        width: '70%'
    },
    topPart: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

});