import { GET_RECIBOS } from "../actions/recibos.action"

const INITIAL_STATE = {
    list: [],
    selected: null
}
const RecibosReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state
        case GET_RECIBOS:
            return {
                ...state,
                list: action.list
            }
    }
}

export default RecibosReducer