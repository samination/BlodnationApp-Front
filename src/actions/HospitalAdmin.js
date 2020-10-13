import api from "./api";

export const ACTION_TYPES = {
    CREATE: 'CREATE'
}


const formateData = data => ({
    ...data,
    age: parseInt(data.age ? data.age : 0)
})



export const create = (data, onSuccess) => dispatch => {
    data = formateData(data)
    api.HospitalAdmin().create(data)
        .then(res => {
            dispatch({
                type: ACTION_TYPES.CREATE,
                payload: res.data
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}