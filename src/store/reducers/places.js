import { ADD_PLACE, SELECT_PLACE, UNSELECT_PLACE, DELETE_PLACE } from '../actions/actionTypes'
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    key: Math.random(),
                    name: action.placeName,
                    image: {
                        uri: 'https://c1.staticflickr.com/5/4096/4744241983_34023bf303_b.jpg'
                    }
                })
            }
        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter(place => {
                    return place.key !== state.selectedPlace.key;
                }),
                selectedPlace:null,
            }
        case SELECT_PLACE:
            return{
                ...state,
                selectedPlace:action.selectedPlace,

            }
        case UNSELECT_PLACE:
            return{
                selectedPlace:null,
            }
    }

}
const initialState = {
    places: [],
    selectedPlace: null
}

export default reducer;