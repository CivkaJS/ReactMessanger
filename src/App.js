import React from 'react';
import './App.scss';
import Input from './Input';
import Message from './MessageList'
import AlignItemsList from './List'
import { useState, useEffect } from 'react';
import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined';

function App() {
  const [messageBox, setMessageBox] = useState([]);
  const [listBox, setListBox] = useState([]);
  let [lineText, setLineText] = useState('');

  useEffect(()=>{
    if(((messageBox.length+1)%2) === 0){
      setMessageBox([{
            text: '^-^', 
            autor: 'bot'
        },
        ...messageBox]);
    }
  },[messageBox])

  const updateMessage = () => {
    if(lineText){
    setMessageBox([{
                      text: lineText, 
                      autor: 'me'
                  },
                  ...messageBox]);
                  // document.querySelector('.input-text').value = '';
                  lineText = '';
                  setLineText ('');
                }
  }

  const addPersonChat = () => {
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

  return (
    <div className="App-header App">
      
      <div className="messagePage"> 
        <div className='listPage'>
            <button onClick={addPersonChat} className='newPerson'>
              <AddReactionOutlinedIcon />
             <p>Add new chat</p>
            </button>
            <div className="boxList">
              {listBox.map((person, index)=>(
                <div key={index} className='person'>
                  <AlignItemsList 
                      addName = {person.Name}
                      addStatus = {person.Status}
                      addFoto = {person.Avatar}
                  />
                </div>
              ))}
            </div>
        </div>
        <div className="Message-box"> 
          {messageBox.map((send, index)=>(
            <div key={index} style={{width: '100%'}}>
              <Message 
                       outputText = {send.text} 
                       outputAutor = {send.autor} 
                    />
            </div>
          ))}   
        </div>
        
      </div>
        <Input eventClick = {updateMessage} eventLineUpdate = {lineUpdate} inputTextLine = {lineText}/>
    </div>
  );
}

 export default App;
