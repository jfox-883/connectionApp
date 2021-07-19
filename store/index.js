import { createStore, combineReducers } from 'redux';

import UserReducer from './reducers/user.reducer';
import RequestsReducer from './reducers/requests.reducer';

const RootReducer = combineReducers({
    user: UserReducer,
    requests: RequestsReducer
})

export default createStore(RootReducer)