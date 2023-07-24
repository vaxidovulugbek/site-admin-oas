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
        token: "9Lr_BCpJb2SbxavS0cpJFkxFyHiI8jIGRXoSIImj1wr4ca9z7QfpY95GJPngi8iW",
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
