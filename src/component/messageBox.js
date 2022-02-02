import * as React from 'react';
import '../App.scss';
import MessageInChat from './messageInChat';

const MessageBox = (props) => {

    return(
            <div className="Message-box">
               {props.inputMessage.map((send, index)=>(
                    <div key={index} style={{width: '100%'}}>
                        <MessageInChat 
                            outputText = {send.text} 
                            outputAutor = {send.author} 
                        />
                    </div>
                ))} 
                {props.renderMessage.map((send, index)=>(
                    <div key={index} style={{width: '100%'}}>
                        <MessageInChat 
                            outputText = {send.text} 
                            outputAutor = {send.author} 
                        />
                    </div>
                ))}
            </div>
    )
}

export default MessageBox;