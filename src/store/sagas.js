import { put, delay, takeLatest } from 'redux-saga/effects'
import { addMessage } from './profile/actions'
import { ADD_MESSAGE_WHITH_SAGA } from './profile/actions'

function* onAddMessageWithSaga(action){
    yield put(addMessage(action.chatId, action.message))

    const botAdd = {
        text: "Saga bot message",
        author: `bot`,
        time: new Date().toLocaleTimeString(),    
    }

    yield delay(2000);
    yield put(addMessage(action.chatId, botAdd));
}

function* mySaga() {
    yield takeLatest( ADD_MESSAGE_WHITH_SAGA, onAddMessageWithSaga)
}

export default mySaga;