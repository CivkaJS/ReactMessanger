// import { useDispatch } from "react-redux";
import { ADD_CHAT, ADD_MESSAGES } from "./profile/actions";
import { addMessage } from "./profile/actions";

 export const middleware = store => next => action => {
    // const dispatch = useDispatch();

    console.log("this is our middleware");

    if(action.type === ADD_MESSAGES && action.message.author !== 'bot'){
        
        setTimeout(()=>{
            const botAdd = {
                text: "Middleware bot message",
                author: 'bot',
                time: new Date().toLocaleTimeString(),    
            }

            store.dispatch(addMessage(action.chatId, botAdd));
            console.log('timeout');
        },2000)
    }

    if(action.type === ADD_CHAT){

        setTimeout(()=>{
            const botAdd = {
                text: `Добро пожаловать в чат ${action.name}`,
                author: 'bot',
                time: new Date().toLocaleTimeString(),    
            }

            store.dispatch(addMessage(action.chatId, botAdd));
            console.log('timeout');
        },2000)

    }

    return next(action);
}

// export default middleware;
