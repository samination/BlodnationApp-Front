import api from "./api";

export const ACTION_TYPES = {


    LOGIN_REQUEST :'LOGIN_REQUEST',
    LOGIN_SUCCESS : 'LOGIN_SUCCESS',
    SET_MESSAGE : 'SET_MESSAGE',
    CLEAR_MESSAGE : "CLEAR_MESSAGE",
    LOGIN_FAIL :"LOGIN_FAIL",
    LOGOUT : "LOGOUT"


}



export const login = (username, password) => (dispatch) => {
    return api.Login().log(username, password).then(
      (data) => {
        dispatch({
          type: ACTION_TYPES.LOGIN_SUCCESS,
          payload: { user: data },
        });
  
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: ACTION_TYPES.LOGIN_FAIL,
        });
  
        dispatch({
          type: ACTION_TYPES.SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };

  export const logout = () => (dispatch) => {
    api.Login().logout();
  
    dispatch({
      type: ACTION_TYPES.LOGOUT,
    });
  };




/*export const requestLogin = (creds) => {
    return {
        type: ActionTypes.LOGIN_REQUEST,
        creds
    }
}
  
export const receiveLogin = (response) => {
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        token: response.token
    }
}
  
export const loginError = (message) => {
    return {
        type: ActionTypes.LOGIN_FAILURE,
        message
    }
}*/

/*export const loginUser = (creds) => (dispatch) => {


    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(creds))

    return fetch(baseUrl + 'users/login', {
        method: 'POST',
        headers: { 
            'Content-Type':'application/json' 
        },
        body: JSON.stringify(creds)
    })
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
        },
        error => {
            throw error;
        })
    .then(response => response.json())
    .then(response => {
        if (response.success) {
            // If login was successful, set the token in local storage
            localStorage.setItem('token', response.token);
            localStorage.setItem('creds', JSON.stringify(creds));
            // Dispatch the success action
            dispatch(fetchFavorites());
            dispatch(receiveLogin(response));
        }
        else {
            var error = new Error('Error ' + response.status);
            error.response = response;
            throw error;
        }
    })
    .catch(error => dispatch(loginError(error.message)))
};*/


