import '../App.scss';
import * as React from 'react';

import { useState } from 'react';
import ButtonAddChatContainer from './ButtonAddChat/ButtonAddChatContainer';
import DialogAddChatContainer from './DialogAddChat/DialogAddChatContainer'

const AddButton = () => {

    const [visible, setVisible] = useState(false);

    const handeleOpen = () => {
        setVisible(true);
    }

    const handeleClose = () => {
        setVisible(false);
    }

    return (
        <React.Fragment>
            <ButtonAddChatContainer handleOpen={handeleOpen} />
            <DialogAddChatContainer
                visible={visible}
                handeleClose={handeleClose}
            />
        </React.Fragment>
    )
}
export default AddButton;