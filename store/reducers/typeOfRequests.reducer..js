import { GET_TYPE_OF_REQUEST } from '../actions/typeOfRequest.action'

const INITIAL_STATE = {
    items: [],
    selected: null
}

const TypeOfRequestReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_TYPE_OF_REQUEST:
            return {
                ...state,
                items: action.payload
            }
        default:
            return {...state}
    }
}

export default TypeOfRequestReducer