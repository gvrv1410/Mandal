import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";

import authReducer from "../reducers/authReducer";
import fetchHeadlineReducer from "../reducers/headlineReducers";
import memberReducer from "../reducers/memberReducer";
import directorReducers from "../reducers/directorReducers";
import bloodReducer from "../reducers/bloodReducer";
import businessReducer from "../reducers/businessReducer";
import donorReduers from "../reducers/donorReducers";
import notificationReducers from "../reducers/notificationReducers";
import headOfFamilyReducers from "../reducers/headOfFamilyReducers";
import newsReducer from "../reducers/newsReducer";
import adsReducers from "../reducers/adsReducers";
import sponsorReducers from "../reducers/sponsorReducers";
import mukhyaReducers from "../reducers/mukhyaReducers";

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
  business: businessReducer,
  donor: donorReduers,
  notification: notificationReducers,
  headOfFamilys: headOfFamilyReducers,
  news: newsReducer,
  ads: adsReducers,
  sponsors: sponsorReducers,
  mukhya: mukhyaReducers,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
