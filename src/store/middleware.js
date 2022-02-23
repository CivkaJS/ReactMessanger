
// import { ADD_CHAT, ADD_MESSAGES } from "./profile/actions";
// import { addMessage } from "./profile/actions";

// export const thunk = store => next => action => {
//     const dispatch = useDispatch();

//     console.log("this is our middleware");

//     if (action.type === ADD_MESSAGES && action.message.author !== 'bot') {

//         setTimeout(() => {
//             const botAdd = {
//                 text: "Middleware bot message",
//                 author: 'bot',
//                 time: new Date().toLocaleTimeString(),
//             }

//             store.dispatch(addMessage(action.chatId, botAdd));
//             console.log('timeout');
//         }, 2000)
//     }

//     return next(action);
// }

import { API_URL_PUBLIC } from "../constant/endpoints";
import { getGistsRequest, getGistsSuccess, getGistsFailure, setGistsLoading } from "./Gists/actions";
import { getDatabase, ref, push, set } from 'firebase/database'
import firebase from '../service/firebase';
import { CHANGE_MESSAGES } from "./profile/actions";

// export const thunk = store => next => action => {
//     const dispatch = useDispatch();

//     console.log("this is our middleware");

//     if (action.type === ADD_MESSAGES && action.message.author !== 'bot') {

//         setTimeout(() => {
//             const botAdd = {
//                 text: "Middleware bot message",
//                 author: 'bot',
//                 time: new Date().toLocaleTimeString(),
//             }

//             store.dispatch(addMessage(action.chatId, botAdd));
//             console.log('timeout');
//         }, 2000)
//      }

//     return next(action);
// }


export const getAllGist = () => async (dispatch) => {

    dispatch(setGistsLoading(true));
    dispatch(getGistsRequest());

    try {
        const res = await fetch(API_URL_PUBLIC);

        if (!res.ok) {
            throw new Error(`Request failed with status ${res.status}`);
        }
        const result = await res.json();

        dispatch(getGistsSuccess(result));
        dispatch(getGistsFailure(null));
    }
    catch (err) {
        dispatch(getGistsFailure(err.message));
    }
    dispatch(setGistsLoading(false));
}

export const addChat = () => async (dispatch, addres, data, action) => {
        const db = getDatabase(firebase);
        const chatRef = ref(db, addres );
        const newChatRef = push(chatRef);
    
        await set(newChatRef, {name: data}).then(()=>{
            dispatch({type: action, payload: data });
          });
}