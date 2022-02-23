import * as React from 'react';
import '../App.scss';
import AlignItemsList from './PersonChat';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { get, getDatabase, ref, child, remove } from 'firebase/database'
import firebase from '../service/firebase';
import { useEffect, useState } from 'react';
import { DELETE_DB_CHAT, DELETE_DB_MESSAGE } from '../store/profile/actions';


const PersonChat = () => {
  const [chats, getChats] = useState([]);
  const [updateChat, setUpdateChat] = useState(false);
  const [updateMessage, setUpdateMessage] = useState(false);
  // const dispatch = useDispatch();

  const dispatch = useDispatch();
  const actionChatAdd = useSelector(state => state.profile.chatUpdateInput);
  const actionChatDelete = useSelector(state => state.profile.chatUpdateDelete);

  const getDataBaseInfo = () => {
    const db = getDatabase(firebase);
    const dbRef = ref(db);

    // dispatch({ type: UPDATE_DB_CHAT, payload: false });
    // const starCountRef = get(child(dbRef, '/chats'));
    get(child(dbRef, '/chats')).then((snapshot) => {
      if (snapshot.exists()) {
        const obj = snapshot.val();
        const id = Object.keys(obj);
        const chatArr = id.map(items => ({ id: items, name: obj[items].name }));
        getChats(chatArr);
      }
    })
  }

  useEffect(() => {
    getDataBaseInfo();
  }, [actionChatAdd, actionChatDelete])

  const handeleDelete = async (id) => {
    const db = getDatabase(firebase);
    const chatRef = ref(db, `/chats/${id}`);
    const messageRef = ref(db, `/messages/${id}`);
    await remove(messageRef).then(() => {
      updateMessage ? setUpdateMessage(false) : setUpdateMessage(true);
      dispatch({ type: DELETE_DB_MESSAGE, payload: updateMessage });
    });
    await remove(chatRef).then(() => {
      updateChat ? setUpdateChat(false) : setUpdateChat(true);
      dispatch({ type: DELETE_DB_CHAT, payload: updateChat });
    });
  }

  const { chatId } = useParams();

  return (
    <div className="boxList">
      {chats.map((chat, index) => (
        <Link to={`/chats/${chat.id}`} key={index} className='person'>
          <div className='personChat' style={{ marginLeft: chat.id === chatId ? '5%' : '0px' }}>
            <AlignItemsList
              addName={chat.name} handeleDelete={() => handeleDelete(chat.id)}
            />
          </div>
        </Link>
      )
      )}
    </div>
  )
}
export default PersonChat;
