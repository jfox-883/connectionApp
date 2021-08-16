import { REQUESTS_TYPE } from "../../mock-data/typeRequests";

export const GET_TYPE_OF_REQUEST = 'GET_TYPE_OF_REQUEST'

export const getTypeOfRequest = () => ({
    type: GET_TYPE_OF_REQUEST,
    payload: REQUESTS_TYPE
})