import { createStore, compose } from "redux";
import { persistStore } from "redux-persist";
import reducers from "../reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers());

export function getState() {
    return store.getState();
}
export const persistor = persistStore(store);
export const dispatch = store.dispatch;
export default store;
