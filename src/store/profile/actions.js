export const CHANGE_NAME = "PROFILE::CHANGE_NAME";

export const ADD_CHAT = "CHATS::ADD_CHAT";

export const ADD_MESSAGES = "CHATS::ADD_MESSAGES"

export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGES,
    chatId,
    message
})

export const addChat = (name) => ({
    type: ADD_CHAT,
    name
})

// const EXAMPLE_ACTION = "EXAMPLE_ACTION";

// export const toggleShowName = {
//   type: EXAMPLE_ACTION
// }