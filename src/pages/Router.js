import * as React from 'react';
import '../App.scss';
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

const Router = () => {
    return(
    <React.Fragment>
        <ControlPanel/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/chats/:chatId" element={<Chats/>}/>
      </Routes> 
    </React.Fragment>     
    )
}

export default Router;