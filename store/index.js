import { createStore, combineReducers } from 'redux';

import UserReducer from './reducers/user.reducer';

const RootReducer = combineReducers({
    user: UserReducer
})

export default createStore(RootReducer)