import * as React from 'react';
import '../App.scss';
import { Routes, Route } from "react-router-dom";
import RequiredAuth from '../hocs/requiredAuth';
import Home from './Home';
import Chats from './Chat';
import Profile from './Profile';
import ControlPanel from '../component/controlPanel';
import NoChats from './NoChats';
import Gists from './Gists'
import SignUp from './SignUp';
import Login from './Login';

// import { create } from '@mui/material/styles/createTransitions';
export const MyHandler = React.createContext();
const Router = () => {

  return (
    <React.Fragment>
      <MyHandler.Provider>
        <ControlPanel />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/" element={<Home />} />

          <Route path="/signup" exact element={<SignUp />} />
          <Route path="/login" exact element={<Login />} />

          <Route element={<RequiredAuth />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/chats" element={<NoChats />} />
            <Route path="/chats/:chatId" element={<Chats />} />
            <Route path="/gists" element={<Gists />} />
          </Route>

          <Route path="*" element={<NoChats />} />
        </Routes>
      </MyHandler.Provider>
    </React.Fragment>
  )
}
export default Router;