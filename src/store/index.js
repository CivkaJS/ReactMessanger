import profileReducer from "./profile/reducer";
import gistsReduser from "./Gists/reducer";
import LoginReduser from "./Login/reducer";
import { applyMiddleware, combineReducers, createStore} from 'redux';
import { compose } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "@redux-saga/core";
import MySaga from "./sagas";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const sagaMiddleware = createSagaMiddleware();

// const persistConfig = {
//     key: 'root',
//     storage,
// } 

const allReduser = combineReducers({
    profile: profileReducer,
    gists: gistsReduser,
    login: LoginReduser,
})

// const persistedReducer = persistReducer(persistConfig, allReduser);         

// export const store = createStore(allReduser, composeEnhancers(applyMiddleware(sagaMiddleware, thunk)));

export const store = createStore(allReduser, composeEnhancers(applyMiddleware( thunk)));

// sagaMiddleware.run(MySaga );

// export const persistor = persistStore(store); //Для обновления сообщений при работе с БД 

// export const store = createStore(profileReducer, window.__REDUX_DEVTOOLS_EXTENSION__ &&                        
//     window.__REDUX_DEVTOOLS_EXTENSION__());
