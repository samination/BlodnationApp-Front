import { ACTION_TYPES } from "../actions/BloodPatient";
const initialState = {
    list: []
}


export const BloodPatient = (state = initialState, action) => {

    

    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL_Patients:
            return {
                ...state,
                list: [...action.payload]
            }

        case ACTION_TYPES.CREATE_Patients:
            return {
                ...state,
                list: [...state.list, action.payload]
            }

        case ACTION_TYPES.UPDATE_Patients:
            return {
                ...state,
                list: state.list.map(x => x.id == action.payload.id ? action.payload : x)
            }

        case ACTION_TYPES.DELETE_Patients:
            return {
                ...state,
                list: state.list.filter(x => x.id != action.payload)
            }
            
        default:
            return state
    }
}