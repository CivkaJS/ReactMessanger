import { ADD_MESSAGES, CHANGE_NAME } from "./actions";
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
          console.log(action);
        
        return {
          ...state,
          // showName: !state.showName
          name: action.payload 
        }
      }

      case ADD_CHAT:{
          console.log(action);
        
        return {
          ...state,
          chatList: [
            ...state.chatList,
            {
              id: `id${state.chatList.length}`,
              name: action.name,
            },
          ]
        }
      }

      case ADD_MESSAGES:{
        console.log(action);
        const currentList = state.messageList[action.chatId] || [];
        
        return {
          ...state,
          messageList: {
            ...state.messageList,
            [action.chatId]: [
              ...currentList,
              {
                ...action.message,
                id: `${action.chatId}${currentList.length}`,
              },
            ],
          },
        };
      }

      default:
          return state
    }
  }

  // export default chatReduser;
  export default profileReducer;