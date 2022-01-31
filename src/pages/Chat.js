// import { useState } from "react";
// import { useParams } from "react-router-dom";
// import NoChats from "../component/NoChats";
import Messager from "../component/MesssagePage";

// const saveChat = {
//     id_1: {
//         name: 'Chat_1',
//         message:[{
//             text: "Message from 1 me chat",
//             author: "me"
//         },
//         {
//             text: "Message from 1 bot chat",
//             author: "bot"
//         }
//         ]
//     },
//     id_2: {
//         name: 'Chat_2',
//         message:[{
//             text: "Message from 2 chat",
//             author: "Someone"
//         }]
//     },
//     id_3: {
//         name: 'Chat_1',
//         message:[{
//             text: "Message from 3 chat",
//             author: "Bot"
//         }]
//     }
// }

const Chats = () => {
    // const [chatList, setChatList] = useState(saveChat);
    // let {chatId} = useParams();
    // console.log(chatId);

    return  (
        <div>
            <Messager/>
        </div>
    ) 
}

export default Chats;