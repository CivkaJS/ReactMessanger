import Messager from "../component/MesssagePage";
import React from "react";
import { useParams } from "react-router-dom";
import NoChats from '../pages/NoChats';
import { Box } from "@mui/material";

const Chats = () => {

    let { chatId } = useParams();
    
    return chatId ? (
        <Box className='PageBox'>
            <Messager />
        </Box>
    ) : <NoChats />
}

export default Chats;