import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";
import '../App.scss';
import Box from '@mui/material/Box';
import MessageBox from './messageBox';
import InputLine from './inputLine';
import AddButton from './AddButton';
import PersonChat from './Chats';
import NoChats from '../pages/NoChats';
import { MyThemeContext } from '..';
import { MyHandler } from '../pages/Router';

const Messager = (props) => {
  const contextValue = useContext(MyThemeContext);
  const handler = useContext(MyHandler);

    console.log(contextValue.theme);
    console.log(handler);

    const [messageBox, setMessageBox] = useState([]);
    let [lineText, setLineText] = useState('');

    let {chatId} = useParams();
  
    useEffect(()=>{
      if(((messageBox.length+1)%2) === 0){
        setMessageBox([{
              text: '^-^', 
              author: 'bot'
          },
          ...messageBox]);
      }
    },[messageBox])

    const updateMessage = () => {
      if(lineText){
      setMessageBox([{
                        text: lineText, 
                        author: 'me'
                    },
                    ...messageBox]);
                    lineText = '';
                    setLineText ('');
                  }
    }
  
    const lineUpdate =(event) =>{
      setLineText (event.target.value);
    }
    

    return props.chats[chatId]?(
        <Box sx={{
                width: '100%',
                height: '90vh',
                margin: '0 auto',
                backgroundColor: 'lightgoldenrodyellow',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '2%',
                }}
        >
           <div className="messagePage">
              <div className='listPage'>
                <AddButton addPersonChat={props.handleAddChat}/>
                <PersonChat newChat={props.chats} 
                            idNewChat={chatId}
                            handleDeleteChat = {props.handleDeleteChat}
                            />
              </div >
              {/* <MessageBox inputMessage={messageBox} /> */}
              <MessageBox inputMessage={messageBox} renderMessage={props.chats[chatId].message} />
            </div> 
            <InputLine eventClick = {updateMessage} eventLineUpdate = {lineUpdate} inputTextLine = {lineText}/>
        </Box>
    ) :<NoChats/>
} 
export default Messager;