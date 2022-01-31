import * as React from 'react';
import '../App.scss';
import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined';

const AddButton = (props) => {
    return(
        <button onClick={props.addPersonChat} className='newPerson'>
            <AddReactionOutlinedIcon />
            <p>Add new chat</p>
        </button>
    )
}

export default AddButton;