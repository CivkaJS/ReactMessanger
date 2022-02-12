import * as React from 'react';
import '../App.scss';
import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined';
import { Button, Dialog, DialogTitle, TextField } from '@mui/material';
import { useState} from 'react';
import { useDispatch} from 'react-redux';
import { addChat } from '../store/profile/actions';

const AddButton = (props) => {
    const [newChats, setNewChats] = useState('');
    const [visible, setVisible] = useState(false);
    const dispatch = useDispatch();

    const handeleOpen = () => {
        setVisible(true);
    }

    const handeleClose = () => {
        setVisible(false);
    }

    const handleChange = (event) =>{
        setNewChats(event.target.value);
    }

    const addChats = () =>{
        console.log(newChats);
        dispatch( addChat(newChats) );
        setNewChats('');
        handeleClose();
    }

    return(
    <React.Fragment>
        <Button onClick={handeleOpen} className='newPerson'>
            <AddReactionOutlinedIcon sx={{
                                                marginRight: "10px",
                                        }} />
            <p>Add new chat</p>
        </Button>
        <Dialog sx={{borderRadius: "20px"}} open={ visible } onClose={ handeleClose }>
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
        </Dialog>
    </React.Fragment>
    )
}

export default AddButton;