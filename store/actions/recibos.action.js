import { RECIBOS } from "../../mock-data/recibos";

export const GET_RECIBOS = 'GET_RECIBOS'

export const getRecibos = (list = RECIBOS) => ({
    type: GET_RECIBOS,
    list: list
})