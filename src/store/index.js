import profileReducer from "./profile/reducer";
import { applyMiddleware, combineReducers, createStore} from 'redux';
// import { middleware } from "./middleware";
import { compose } from "redux";
// import thunk from "redux-thunk";
import createSagaMiddleware from "@redux-saga/core";
import MySaga from "./sagas";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: 'root',
    storage,
} 

const allReduser = combineReducers({
    profile: profileReducer,
})

const persistedReducer = persistReducer(persistConfig, allReduser);

export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(MySaga);

export const persistor = persistStore(store);

// export const store = createStore(profileReducer, window.__REDUX_DEVTOOLS_EXTENSION__ &&                        
//     window.__REDUX_DEVTOOLS_EXTENSION__());
