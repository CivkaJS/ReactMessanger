import { ADD_MESSAGES, CHANGE_NAME, DELETE_CHAT } from "./actions";
import { ADD_CHAT } from "./actions";

const initialStateExs = {
    showName: true,
    name: 'Lindsy',
    chatList: [],
    messageList: {}
  }

  // const chatReduser = (state = initialState, action) => {
  //   switch(action.type){
  //     case ADD_CHAT:{
  //       console.log(action);
  //     }
  //     default: 
  //       return state
  //   }
  // }

  const profileReducer = (state = initialStateExs, action) => {
    switch (action.type) {

      case CHANGE_NAME:{
        
        return {
          ...state,
          // showName: !state.showName
          name: action.payload 
        }
      }

      case ADD_CHAT:{

          // const addNew = [{
          //                   id: `id${state.chatList.length}`,
          //                   name: action.name,
          //               }]
        
        return {
          ...state,
          chatList: [
            // ...addNew,
            ...state.chatList,
            {
              id: `id${state.chatList.length}`,
              name: action.name,
            },
          ]
        }
      }

      case ADD_MESSAGES:{
        const currentList = state.messageList[action.chatId] || [];
 
        return {
          ...state,
          messageList: {
            ...state.messageList,
            [action.chatId]: [
              {
                ...action.message,
                id: `${action.chatId}${currentList.length}`,
              },
              ...currentList,
            ],
          },
        };
      }

      case DELETE_CHAT:{
      
        return {
          ...state,
          chatList: [
            ...state.chatList.slice(0, action.payload),
            ...state.chatList.slice(action.payload + 1)
          ],
        };
      }

      // case DELETE_MESSAGES:{
      
      //   return {
      //     ...state,
      //     messageList: {
      //         ...state.messageList,
      //     },
      //   };
      // };
      default:
          return state
    }
  }

  // export default chatReduser;
  export default profileReducer;