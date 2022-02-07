// import { useState } from "react";
// import { useParams } from "react-router-dom";
// import NoChats from "../component/NoChats";
import Messager from "../component/MesssagePage";
import React from "react";

const Chats = (props) => {

    // const [chatList, setChatList] = useState(saveChat);
    // let {chatId} = useParams();
    // console.log(chatId);

    return  (
        <div>
            <Messager chats={props.chats}
                  handleAddChat = {props.handleAddChat}
                  handleDeleteChat = {props.handleDeleteChat}
            />
        </div>
    ) 
}

export default Chats;