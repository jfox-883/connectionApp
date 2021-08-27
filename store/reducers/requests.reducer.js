import { GET_REQUESTS, ADD_REQUESTS } from '../actions/requests.action';

const INITIAL_STATE = {
    list: [],
    selected: null
}

const RequestsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return {...state}
        case GET_REQUESTS:
            return {...state}
        case ADD_REQUESTS:
            return {
                ...state,
                list: [action.payload, ...state.list]
            }
    }
}

export default RequestsReducer;