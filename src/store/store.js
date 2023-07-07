import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";

import authReducer from "../reducers/authReducer";
import fetchHeadlineReducer from "../reducers/headlineReducers";
import memberReducer from "../reducers/memberReducer";
import directorReducers from "../reducers/directorReducers";
import bloodReducer from "../reducers/bloodReducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  auth: authReducer,
  fetchHeadlines: fetchHeadlineReducer,
  member: memberReducer,
  totalDirectorMember: directorReducers,
  blood: bloodReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
