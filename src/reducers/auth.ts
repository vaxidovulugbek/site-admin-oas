import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import constants from "helpers/constants";

const initialState = {
    user: {},
};

const authReducer = (
    state = initialState,
    action: { type: string; data: object }
) => {
    switch (action.type) {
        case constants.auth.LOGIN:
            return { ...state, user: action.data };

        case constants.auth.LOGOUT:
            return { ...state, user: {} };

        default:
            return state;
    }
};

export default persistReducer(
    {
        key: "auth",
        storage,
    },
    authReducer
);
