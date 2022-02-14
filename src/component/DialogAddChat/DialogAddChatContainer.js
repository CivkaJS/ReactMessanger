import DialogAddChat from "./DialogAddChat";
import { addChat } from '../../store/profile/actions';
import { useState } from "react";
import { useDispatch } from "react-redux";

const DialogAddChatContainer = (props) => {
 
    const [newChats, setNewChats] = useState('');
    const dispatch = useDispatch();

    const handleChange = (event) =>{
        setNewChats(event.target.value);
    }

    const addChats = () =>{
        console.log(newChats);
        dispatch( addChat(newChats) );
        setNewChats('');
        props.handleClose();
    }

    return (
    <DialogAddChat
      newChats={newChats}
      visible={props.visible}
      addChats={addChats}
      handeleClose={props.handeleClose} 
      handleOpen={props.handleOpen}
      handleChange={handleChange}
    />
  );
};

export default DialogAddChatContainer;