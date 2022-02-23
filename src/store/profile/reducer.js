import { CHANGE_NAME, DELETE_CHAT } from "./actions";
import { INPUT_DB_CHAT, DELETE_DB_CHAT, INPUT_DB_MESSAGE, DELETE_DB_MESSAGE, CHANGE_MESSAGES } from "./actions";

const initialStateExs = {
    showName: true,
    name: 'Lindsy',
    chatUpdateInput: true,
    chatUpdateDelete: true,
    messageUpdateInput: true,
    messageUpdateDelete: true,
    messages: {},
    chatList: [],
    messageList:{}
  }

  const profileReducer = (state = initialStateExs, action) => {
    switch (action.type) {

      case CHANGE_NAME:{
        
        return {
          ...state,
          // showName: !state.showName
          name: action.payload 
        }
      }

      case INPUT_DB_CHAT:{

        return{
          ...state,
          chatUpdateInput: action.payload
        }
      }

      case DELETE_DB_CHAT:{

        return{
          ...state,
          chatUpdateDelete: action.payload
        }
      }

      case INPUT_DB_MESSAGE:{
        return{
          ...state,
          messageUpdateInput: action.payload
        }
      }

      case DELETE_DB_MESSAGE:{
        return{
          ...state,
          messageUpdateDelete: action.payload
        }
      }

      case CHANGE_MESSAGES: {
        return {
          ...state,
          messages: {
            ...state.messages,
            [action.payload.chatId]: action.payload.messages,
          },
        };
      }

      // case ADD_CHAT:{
        
      //   return {
      //     ...state,
      //     chatUpdate: action.update,
      //     chatList: [
      //       ...state.chatList,
      //       {
      //         id: `id${state.chatList.length}`,
      //         name: action.name,
      //       },
      //     ]
      //   }
      // }

      // case ADD_MESSAGES:{
      //   const currentList = state.messageList[action.chatId] || [];
 
      //   return {
      //     ...state,
      //     messageList: {
      //       ...state.messageList,
      //       [action.chatId]: [
      //         {
      //           ...action.message,
      //           id: `${action.chatId}${currentList.length}`,
      //         },
      //         ...currentList,
      //       ],
      //     },
      //   };
      // }

      case DELETE_CHAT:{
      
        return {
          ...state,
          chatList: [
            ...state.chatList.slice(0, action.payload),
            ...state.chatList.slice(action.payload + 1)
          ],
        };
      }

      default:
          return state
    }
  }

  // export default chatReduser;
  export default profileReducer;