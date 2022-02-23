import React from "react";
import "../../App.scss"
import { Button, DialogTitle, TextField, Dialog } from "@mui/material";

const DialogAddChat = ({ visible, newChats, addChats, handeleClose, handeleChange }) => (
    <Dialog sx={{ borderRadius: "20px" }} open={visible} onClose={handeleClose}>
        <div className='addNewChatBox'>
            <DialogTitle>Добавьте новый чат</DialogTitle>
            <div className='addNewChat'>
                <TextField value={newChats} onChange={handeleChange} />
                <Button onClick={addChats} sx={{
                    marginTop: '6%',
                    backgroundColor: 'aliceblue'
                }}>Добавить чат
                </Button>
            </div>
        </div>
    </Dialog>
);

export default DialogAddChat;