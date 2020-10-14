import { combineReducers } from "redux";
import { dCandidate } from "./dCandidate";
import {BloodPatient} from "./BloodPatient";
import {login} from "./Login"
import {message} from "./Message";


export const reducers = combineReducers({
   dCandidate,
   BloodPatient,
   message,
   login

})