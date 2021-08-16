export const GET_REQUESTS = 'GET_REQUESTS';
export const ADD_REQUESTS = 'ADD_REQUESTS';

export const getRequests = (id) => ({
    type: GET_REQUESTS,
    idEmpleado: id
})

export const addRequests = (id, item) => ({
    type: ADD_REQUESTS,
    idEmpleado: id,
    payload: item
})