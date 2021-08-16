import { createStore, combineReducers } from 'redux';

import UserReducer from './reducers/user.reducer';
import RequestsReducer from './reducers/requests.reducer';
import EmpleadoReducer from './reducers/empleado.reducer';
import RecibosReducer from './reducers/recibos.reducer';
import TypeOfRequestReducer from './reducers/typeOfRequests.reducer.';

const RootReducer = combineReducers({
    user: UserReducer,
    requests: RequestsReducer,
    empleado: EmpleadoReducer,
    recibos: RecibosReducer,
    typeOfRequests: TypeOfRequestReducer
})

export default createStore(RootReducer)