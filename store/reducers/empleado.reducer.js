import { EMPLEADO } from "../../mock-data/empleado";

const INITIAL_STATE = {
    data: EMPLEADO,
}

const EmpleadoReducer = (state = INITIAL_STATE, action) => {
    return {...state}
}

export default EmpleadoReducer