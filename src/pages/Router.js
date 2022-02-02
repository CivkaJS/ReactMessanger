import * as React from 'react';
import '../App.scss';
import { useState } from 'react';
// import Box from '@mui/material/Box';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import { ListItemButton } from '@mui/material';
// import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
// import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
// import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined';
// import { Link } from "react-router-dom";
import {
    Routes,
    Route
  } from "react-router-dom";
import Home from './Home';
import Chats from './Chat';
import Profile from './Profile';
import ControlPanel from '../component/controlPanel';
import NoChats from './NoChats';

const saveChat = {
  id_1: {
      name: 'Ivan',
      Status: 'Online',
      Avatar: "/static/images/avatar/1.jpg",
      message:[{
          text: "Message from 1 me chat",
          author: "me"
      },
      {
          text: "Message from 1 bot chat",
          author: "bot"
      }
      ]
  },
  id_2: {
      name: 'Olga',
      Status: 'Ofline',
      Avatar: "/static/images/avatar/1.jpg",
      message:[{
          text: "Message from 2 chat",
          author: "Someone"
      }]
  },
  id_3: {
      name: 'Igor',
      Status: 'Online',
      Avatar: "/static/images/avatar/1.jpg",
      message:[{
          text: "Message from 3 chat",
          author: "Bot"
      }]
  }
}

const Router = () => {
  const [chatList, setChatList] = useState(saveChat);

    return(
    <React.Fragment>
        <ControlPanel/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/chats/:chatId" element={<Chats chats={chatList}/>}/>
        <Route path="*" element={<NoChats chats={chatList}/>}/>
      </Routes> 
    </React.Fragment>     
    )
}

export default Router;