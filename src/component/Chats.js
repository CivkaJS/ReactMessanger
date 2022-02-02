import * as React from 'react';
import '../App.scss';
import AlignItemsList from './PersonChat';
import { Link } from 'react-router-dom';

const PersonChat = (props) => {
     return(
            <div className="boxList">
                {Object.keys(props.newChat).map((person, index)=>(
                    <Link to={`/chats/${person}`}  key={index} className='person'>
                    <div className='personChat' style={{marginLeft: person === props.idNewChat ? '20px' : '0px'}}>
                      <AlignItemsList 
                          addName = {props.newChat[person].name}
                          addStatus = {props.newChat[person].Status}
                          addFoto = {props.newChat[person].Avatar}
                      />
                    </div>
                    </Link>
                  ))}
            </div>
        )
    }
            
export default PersonChat;