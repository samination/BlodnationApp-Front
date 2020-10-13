import { ACTION_TYPES } from "../actions/BloodPatient";



const initialState = {
    list: []
}


export const dCandidate = (state = initialState, action) => {


    switch (action.type) {
        
       case ACTION_TYPES.CREATE:
            return {
                ...state,
                list: [...state.list, action.payload]
            }

            default:
                return state

        }

}