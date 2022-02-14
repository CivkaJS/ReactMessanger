import '../App.scss';
import * as React from 'react';
// import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined';
// import { Button, Dialog, DialogTitle, TextField } from '@mui/material';
import { useState} from 'react';
// import { useDispatch} from 'react-redux';
// import { addChat } from '../store/profile/actions';
import ButtonAddChatContainer from './ButtonAddChat/ButtonAddChatContainer';
import DialogAddChatContainer from './DialogAddChat/DialogAddChatContainer'

const AddButton = () => {

    // const [newChats, setNewChats] = useState('');
    // const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);
    
    const handeleOpen = () => {
        setVisible(true);
    }

    const handeleClose = () => {
        setVisible(false);
    }

    // const addChats = () =>{
    //     console.log(newChats);
    //     dispatch( addChat(newChats) );
    //     setNewChats('');
    //     handeleClose();
    // }

    // const handleChange = (event) =>{
    //     setNewChats(event.target.value);
    // }

    return(
    <React.Fragment>

        <ButtonAddChatContainer handleOpen = {handeleOpen}/>
        <DialogAddChatContainer
                                visible={visible}
                                handleClose = {handeleClose}
                                />
        {/* <Button onClick={handeleOpen} className='newPerson' >
            <AddReactionOutlinedIcon sx={{
                                                marginRight: "10px",
                                                fontSize: "1rem",
                                        }} />
            <p>Add new chat</p>
        </Button> */}
        {/* <Dialog sx={{borderRadius: "20px"}} open={ visible } onClose={ handeleClose }>
            <div className='addNewChatBox'>
                <DialogTitle>Добавьте новый чат</DialogTitle>
                <div className='addNewChat'>
                    <TextField value ={newChats} onChange={handleChange}/>
                    <Button onClick={addChats} sx={{
                                                    marginTop: '6%',
                                                    backgroundColor: 'aliceblue'
                                                }}>Добавить чат
                    </Button>
                </div>
            </div>
        </Dialog> */}
    </React.Fragment>
    )
}

export default AddButton;