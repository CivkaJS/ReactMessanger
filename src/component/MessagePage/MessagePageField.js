import * as React from 'react';
import AddButton from "../AddButton";
import PersonChat from "../Chats";
import MessageBox from "../messageBox";
import InputLine from "../inputLine";

const MessageField = () => (
    <React.Fragment>
           <div className="messagePage">
              <div className='listPage'>
                <AddButton/>
                <PersonChat/>
              </div >
                <MessageBox/>
            </div> 
            <InputLine/>
    </React.Fragment>
  );

export default MessageField;
  