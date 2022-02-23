import * as React from 'react';
import '../App.scss';
import MessageInChat from './messageInChat';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useCallback, useState, useEffect } from 'react';
import {  } from '../store/middleware';
import { get, getDatabase, ref, child } from 'firebase/database'
import firebase from '../service/firebase';

const MessageBox = () => {

  // const profileName = useSelector(state => state.name);
  const [message, setMessage] = useState([]);
  // const messageList = useSelector((state) => state.profile.messages);
  const actionMessageAdd = useSelector(state => state.profile.messageUpdateInput);
  const actionMessageDelete = useSelector(state => state.profile.messageUpdateDelete);
  const { chatId } = useParams();

  const getDataBaseInfo = () => {

    const db = getDatabase(firebase);
    const dbRef = ref(db);

    get(child(dbRef, `/messages/${chatId}`)).then((snapshot) => {
      if (snapshot.exists()) {
        const obj = Object.values(snapshot.val());
        setMessage(obj);
      }
      else {
        setMessage([]);
      }
    })
  }

   useEffect(() => {
    getDataBaseInfo();
  }, [chatId, actionMessageAdd, actionMessageDelete]);

  const renderMessage = useCallback((message, index) => {
    return (
      <div key={index} style={{ width: '100%' }}>
        <MessageInChat
          outputText={message.text}
          outputAutor={message.author}
          outputTime={message.time}
        />
      </div>
    )
  }, [])

  return (
    <div className="Message-box">
      {message?.map((send, index) => renderMessage(send, index))}
    </div>
  )
}
export default MessageBox;