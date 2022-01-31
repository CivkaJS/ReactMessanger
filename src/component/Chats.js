import * as React from 'react';
import '../App.scss';
import AlignItemsList from './PersonChat';

const PersonChat = (props) => {

     return(
            <div className="boxList">
                {props.newChat.map((person, index)=>(
                    <div key={index} className='person'>
                      <AlignItemsList 
                          addName = {person.Name}
                          addStatus = {person.Status}
                          addFoto = {person.Avatar}
                      />
                    </div>
                  ))}
            </div>
        )
    }
            
export default PersonChat;