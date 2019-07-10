import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    FlatList,
    Button,
    TextInput,
    ListView,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import CustomerRow from './CustomerRow'
export default class PlaceList extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        console.log('listing item',this.props.places)
        return(
            <FlatList style={styles.listContainer}
                data={this.props.places}
                renderItem={({item})=>{
                    console.log(item);
                    <View>

                        <Text>{item}</Text>
                    </View>
                }
                
            }
            >

            </FlatList>
        )
    }
}
const styles=StyleSheet.create({

    listContainer:{
        width:'100%'
    }
})