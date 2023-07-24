import { combineReducers } from "redux";
import authReducer from "./auth";
import systemReducer from "./system";

const reducers = combineReducers({
    auth: authReducer,
    system: systemReducer,
});

export default reducers;
