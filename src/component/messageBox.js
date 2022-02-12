import * as React from 'react';
import '../App.scss';
import MessageInChat from './messageInChat';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useCallback } from 'react';

const MessageBox = (props) => {

    // const profileName = useSelector(state => state.name);
    const message =useSelector(state => state.messageList)
    let {chatId} = useParams();
    const getMessagesById = message[chatId]
  
    console.log({getMessagesById});

    const renderMessage = useCallback( (message, index)=>{
      return(
                <div key={index} style={{width: '100%'}}>
                        <MessageInChat 
                            outputText = {message.text} 
                            outputAutor = {message.author} 
                        />
                    </div>
            )
    },[])

    return(
            <div className="Message-box">

                {getMessagesById?.map((send, index)=> renderMessage(send, index))}
                
            </div>
    )
}

export default MessageBox;