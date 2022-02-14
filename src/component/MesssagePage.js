import * as React from 'react';
import '../App.scss';
import MessageBox from './messageBox';
import InputLine from './inputLine';
import AddButton from './AddButton';
import PersonChat from './Chats';
// import { MyThemeContext } from '..';
// import { MyHandler } from '../pages/Router';
// import MessageFieldContainer from './MessagePage/MessagePageFieldcontaner';

const Messager = () => {

    return (
      // <MessageFieldContainer/>
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
    ) 
} 
export default Messager;