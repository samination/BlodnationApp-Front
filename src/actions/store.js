import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reducers } from "../reducers";
import logger from 'redux-logger';


export const store = createStore(

    
    reducers,
    compose(
        applyMiddleware(thunk,logger),
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)