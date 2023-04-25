import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import taskReducer from "./slices/taskSlice";

const persitConfig = {
  key: "root",
  storage
};

const rootReducer = combineReducers({
  taskSlice: taskReducer,

});

const persistedReducer = persistReducer(persitConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
});

export const persistor = persistStore(store);