import {ADD_PLACE,DELETE_PLACE,SELECT_PLACE,UNSELECT_PLACE} from './actionTypes'
export const addPlace=(placeName)=>{
    return {
        type:ADD_PLACE,
        placeName:placeName
    }
}
export const deletePlace=()=>{
    return{
        type:DELETE_PLACE,

    }
}

export const selectPlace=(list)=>{
    return{
        type:SELECT_PLACE,
        selectPlace:list
    }
}

export const deselectPlace=()=>{
    return{
        type:UNSELECT_PLACE,
    }
}