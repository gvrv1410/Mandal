import { createStore, combineReducers } from "redux";
import AsyncStorage from "@react-native-community/async-storage";
import { persistStore, persistReducer } from "redux-persist";
import authReducer from "../reducers/authReducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  blacklist: ["auth"],
};

const reducer = combineReducers({
  auth: authReducer,
});

const rootReducer = persistReducer(persistConfig, reducer);
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persister = persistStore(store);
