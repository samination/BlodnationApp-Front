import api from "./api";

export const ACTION_TYPES = {

    
    CREATE_Patients: 'CREATE_Patients',
    UPDATE_Patients: 'UPDATE_Patients',
    DELETE_Patients: 'DELETE_Patients',
    FETCH_ALL_Patients: 'FETCH_ALL_Patients'
}

const formateData = data => ({
    ...data,
    age: parseInt(data.age ? data.age : 0)
})

export const fetchAll = () => dispatch => {
    api.BloodPatient().fetchAllPatients()
        .then(response => {
            dispatch({
                type: ACTION_TYPES.FETCH_ALL_Patients,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
}

export const create = (data, onSuccess) => dispatch => {
    data = formateData(data)
    api.BloodPatient().createPatients(data)
        .then(res => {
            dispatch({
                type: ACTION_TYPES.CREATE_Patients,
                payload: res.data
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}

export const update = (id, data, onSuccess) => dispatch => {
    data = formateData(data)
    api.BloodPatient().updatePatients(id, data)
        .then(res => {
            dispatch({
                type: ACTION_TYPES.UPDATE_Patients,
                payload: { id, ...data }
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}

export const Delete = (id, onSuccess) => dispatch => {
    api.BloodPatient().deletePatients(id)
        .then(res => {
            dispatch({
                type: ACTION_TYPES.DELETE_Patients,
                payload: id
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}