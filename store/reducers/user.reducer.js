import { USERS } from "../../mock-data/usuarios";
import { CHECK_USER } from '../actions/user.action';

const INITIAL_STATE = {
    user: null,
    validated: false
}

const UserReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default: 
            return state

        case CHECK_USER:
            const user = USERS.find(res => res.usuario === action.usuario)
            if(user === undefined){
                return state
            } else {
                const passIndex = USERS.findIndex(res => res.password === action.password)
                if(passIndex === -1) return state
                return {
                    user: user,
                    validated: true
                }
            }
    }
}

export default UserReducer