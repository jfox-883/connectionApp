import { createStore, combineReducers } from 'redux';

import UserReducer from './reducers/user.reducer';
import RequestsReducer from './reducers/requests.reducer';
import EmpleadoReducer from './reducers/empleado.reducer';
import RecibosReducer from './reducers/recibos.reducer';

const RootReducer = combineReducers({
    user: UserReducer,
    requests: RequestsReducer,
    empleado: EmpleadoReducer,
    recibos: RecibosReducer
})

export default createStore(RootReducer)