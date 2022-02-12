import * as React from 'react';
import '../App.scss';
import AlignItemsList from './PersonChat';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PersonChat = (props) => {
    const chats = useSelector(state => state.chatList);
    const {chatId} = useParams();

     return(
            <div className="boxList">
                {chats.map((chat, index)=>(
                                            <Link to={`/chats/${chat.id}`}  key={index} className='person'>
                                              <div className='personChat' style={{marginLeft: chat.id === chatId ? '5%' : '0px'}}>
                                                <AlignItemsList 
                                                     addName = {chat.name}
                                                 />
                                              </div>
                                            </Link>
                                          )
                          )}
            </div>
        )
    }
            
export default PersonChat;
