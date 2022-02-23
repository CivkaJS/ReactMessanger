export const CHANGE_NAME = "PROFILE::CHANGE_NAME";

// export const ADD_CHAT = "CHATS::ADD_CHAT";

export const INPUT_DB_CHAT = "CHATS::INPUT_DB_CHAT"

export const DELETE_DB_CHAT = "CHATS::DELETE_DB_CHAT"

export const ADD_MESSAGES = "CHATS::ADD_MESSAGES";

export const INPUT_DB_MESSAGE = "MESSAGE::INPUT_DB_MESSAGE"

export const DELETE_DB_MESSAGE = "MESSAGE::DELETE_CHAT";

export const CHANGE_MESSAGES = "MESSAGE::CHANGE_MESSAGES";

export const DELETE_CHAT = "CHATS::DELETE_CHAT";

export const ADD_MESSAGE_WHITH_SAGA = "MESSAGES::ADD_MESSAGES_WITH_SAGA";

export const DELETE_MESSAGES = "CHAT::DELETE_MESSAGES";

export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGES,
    chatId,
    message
});

export const addMessageThunk = (chatId, message) => (dispatch, getState) => {
    dispatch(addMessage(chatId, message))

    setTimeout(() => {
        if (message.author !== 'bot') {
            console.log(chatId);

            const authorAdd = {
                text: "Middleware author message",
                author: `author`,
                time: new Date().toLocaleTimeString(),
            }

            dispatch(addMessage(chatId, authorAdd));
        }

    }, 2000)
};

export const addMessageSaga = (chatId, message) => ({
    type: "MESSAGES::ADD_MESSAGES_WITH_SAGA",
    chatId,
    message
});

// export const addChat = (name) => ({
//     type: ADD_CHAT,
//      name
// });

// export const deleteChat = (key) => ({
//     type: DELETE_CHAT,
//     payload: key
// });
