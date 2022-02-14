import React from "react";
import "../../App.scss"
import { Button } from "@mui/material";
import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined';

const ButtonAddChat = ({ handleOpen }) => (

    <Button onClick={handleOpen} className='newPerson' >
            <AddReactionOutlinedIcon sx={{
                                                marginRight: "10px",
                                                fontSize: "1rem",
                                        }} />
            <p>Add new chat</p>
    </Button>
  );

export default ButtonAddChat;