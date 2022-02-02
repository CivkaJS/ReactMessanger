import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import '../App.scss';
import Box from '@mui/material/Box';
import MessageBox from './messageBox';
import InputLine from './inputLine';
import AddButton from './AddButton';
import PersonChat from './Chats';
import NoChats from '../pages/NoChats';
// import Chats from '../pages/Chat';

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
//   id_3: {
//       name: 'Igor',
//       Status: 'Online',
//       Avatar: "/static/images/avatar/1.jpg",
//       message:[{
//           text: "Message from 3 chat",
//           author: "Bot"
//       }]
//   }
// }

const Messager = (props) => {

    const [messageBox, setMessageBox] = useState([]);
    const [listBox, setListBox] = useState([]);
    let [lineText, setLineText] = useState('');

    let {chatId} = useParams();

    // console.log(messager.messager);
  
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

    const addChat = () => {

      setListBox([{
                    Name: 'Ivan',
                    Status: 'Online',
                    Avatar: "/static/images/avatar/1.jpg"
                },
                ...listBox]);
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
                <AddButton addPersonChat={addChat}/>
                <PersonChat newChat={props.chats} idNewChat={chatId}/>
              </div >
              {/* <MessageBox inputMessage={messageBox} /> */}
              <MessageBox inputMessage={messageBox} renderMessage={props.chats[chatId].message} />
            </div> 
            <InputLine eventClick = {updateMessage} eventLineUpdate = {lineUpdate} inputTextLine = {lineText}/>
        </Box>
    ) :<NoChats/>
} 
export default Messager;