import * as React from 'react';
import '../App.scss';
import { useState } from 'react';
import {
    Routes,
    Route
  } from "react-router-dom";
import Home from './Home';
import Chats from './Chat';
import Profile from './Profile';
import ControlPanel from '../component/controlPanel';
import NoChats from './NoChats';
// import { create } from '@mui/material/styles/createTransitions';

// const saveChat = {
//   id_1: {
//       name: 'Ivan',
//       Status: 'Online',
//       Avatar: "/static/images/avatar/1.jpg",
//       message:[{
//           text: "Message from 1 me chat",
//           author: "me"
//       },
//       {
//           text: "Message from 1 bot chat",
//           author: "bot"
//       }
//       ]
//   },
//   id_2: {
//       name: 'Olga',
//       Status: 'Ofline',
//       Avatar: "/static/images/avatar/1.jpg",
//       message:[{
//           text: "Message from 2 chat",
//           author: "Someone"
//       }]
//   },
//   id_39: {
//       name: 'Igor',
//       Status: 'Online',
//       Avatar: "/static/images/avatar/1.jpg",
//       message:[{
//           text: "Message from 3 chat",
//           author: "Bot"
//       }]
//   }
// }

export const MyHandler = React.createContext();

 const Router = () => {
//   const [chatList, setChatList] = useState(saveChat);

//    const handleAddChat = () => {
      
//       const lastChatId = Object.keys(chatList).length-1;
//       const numberOfLastChat = Object.keys(chatList)[lastChatId].split('_');
//       numberOfLastChat[1] = Number(numberOfLastChat[1]) + 1;
//       const newChatID = numberOfLastChat.join('_');

//       const addChat = {
//         [newChatID]: {
//                   name: 'Ivan',
//                   Status: 'Online',
//                   Avatar: "/static/images/avatar/1.jpg",
//                   message:[{
//                      text: "Message from 1 me chat",
//                      author: "me"
//                   }]
//                 }
//       }
//       setChatList({...chatList,...addChat});
//    }

//    const handleDeleteChat = () => {
//       console.log('Delete');
//  }

    return(
    <React.Fragment>
      <MyHandler.Provider 
                          // add={handleAddChat}
                          // delete={handleDeleteChat}
                          >
      <ControlPanel/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/chats/:chatId" element={<Chats 
                                                      // chats={chatList}
                                                      // handleAddChat = {handleAddChat}
                                                      // handleDeleteChat = {handleDeleteChat}
                                                  />}/>
        <Route path="*" element={<NoChats 
                                          // chats={chatList}
                                          />}
        />
      </Routes> 
      </MyHandler.Provider>
    </React.Fragment>     
    )
}

export default Router;