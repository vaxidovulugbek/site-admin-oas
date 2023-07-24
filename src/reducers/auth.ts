import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import constants from "helpers/constants";

const initialState = {
    user: {
        id: 1,
        first_name: "super",
        last_name: "user",
        username: "admin",
        email: null,
        phone: null,
        status: 10,
        role: 10,
        token: "KgtVzqFcyAhitwSwg_uQiJV9qwm4Qv7zVP2E5BroON_t1IbFfcVWC36RmkuX5NGC",
    },
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
            return { ...initialState, ...state };
    }
};

export default persistReducer(
    {
        key: "auth",
        storage,
    },
    authReducer
);
