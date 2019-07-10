import React from 'react';
import {Modal,View,Image,Text,Button,StyleSheet} from 'react-native'




const ListDetail = props =>{
    
    let modalContent=null;
    if(props.selectList){
        modalContent=(
            <View>
                <Image source={{uri:`${props.selectList.picture.large}`}} style={styles.placeImage}/>
                <Text style={styles.placeName}>{`${props.selectList.name.first} ${props.selectList.name.last}`}</Text>
            </View>
        )
    }
    return (
        <Modal 
        onRequestClose={props.onModalClose}
        visible={props.selectList!==null}
        animationType='slide'
        ><View style={styles.modalContainer}>
            {modalContent}
            <View>

                <Button title='Delete' color='red' onPress={props.onSelectDeleted}>
                </Button>
                <Button title='Close' onPress={props.onModalClose}></Button>
            </View>
            </View></Modal>
    )
}
const styles=StyleSheet.create({
    modalContainer:{
        margin:22,
    },
    placeImage:{
        width:'100%',
        height:200
    },
    placeName:{
        fontWeight:'bold',
        textAlign:'center',
        fontSize:28
    }
})
export default ListDetail;