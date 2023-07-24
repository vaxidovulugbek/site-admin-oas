import config from "config";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
    lng: "ru",
    languages: config.languages,
};

const systemReducer = (
    state = initialState,
    action: { type: string; data: object }
) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default persistReducer(
    {
        key: "system",
        storage,
    },
    systemReducer
);
