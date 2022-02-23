import DialogAddChat from "./DialogAddChat";
import { INPUT_DB_CHAT } from '../../store/profile/actions';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getDatabase, ref, set, push } from "firebase/database";
import firebase from "../../service/firebase";

const DialogAddChatContainer = (props) => {

  const { visible, handeleClose } = props;
  const [newChats, setNewChats] = useState('');
  const [updateChat, setUpdateChat] = useState(false);
  const dispatch = useDispatch();

  const handeleChange = (event) => {
    setNewChats(event.target.value);
  }

  // useEffect(() => {
  //   addChats();
  // }, [])

  const addChats = async () => {
    const db = getDatabase(firebase);
    const chatRef = ref(db, '/chats' );
    const newChatRef = push(chatRef);

    await set(newChatRef, {name: newChats}).then(()=>{
      updateChat? setUpdateChat(false) : setUpdateChat(true);
      dispatch({type: INPUT_DB_CHAT, payload: updateChat });
    });

    setNewChats('');
    handeleClose();
  }

  return (
    <DialogAddChat
      newChats={newChats}
      visible={visible}
      addChats={addChats}
      handeleClose={handeleClose}
      handeleChange={handeleChange}
    />
  );
};

export default DialogAddChatContainer;