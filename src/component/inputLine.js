import React, { useState, useEffect } from "react";
import '../App.scss';
import { TextField } from '@material-ui/core';
import { Button } from '@mui/material';
import SendTwoToneIcon from '@mui/icons-material/SendTwoTone';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addMessage } from '../store/profile/actions';

const InputLine = () =>{
// class InputLine extends React.Component{
     const [value, setValue] = useState('');
     const message = useSelector(state => state.messageList);
     const name = useSelector(state => state.name);
     const dispatch = useDispatch();
     const {chatId} = useParams();
     

     const handleOnChange = (event) =>{
          setValue(event.target.value);
          console.log(value);
     }

     const handleOnClick = () => {
          add();
     }

     useEffect(()=>{
          if(message[chatId]){
               const addBot = message[chatId];
               if(((addBot.length+1)%2) === 0) {
                     dispatch( addMessage(chatId, {
                         text: 'Bot answer ^-^',
                         author: 'bot',
                     }));
                    }
               }
     },[message])

     const add = () =>{
          dispatch( addMessage(chatId, {
                                             text: value,
                                             author: name,
                                        }));
          setValue('');
      }

        return (
                <div className="Input-box">   
                   {/* <textarea className="input-text" placeholder="Ваше сообщение" name="text" onChange={this.props.eventLineUpdate}></textarea> */}
                   <TextField
                        style ={{flexGrow: '15', marginLeft: "10px", marginRight: "20px"}}
                        npmstyle={{ margin: '20px'}}
                        id="outlined-basic"
                        label="Outlined"
                        variant="outlined"
                        value={value}
                        onChange={handleOnChange}
                        autoFocus={true}
                        placeholder="Введите сообщение"
                   />

                   <Button
                        style ={{flexGrow: '1', marginRight: "10px", fontSize: "small", fontFamily: "cursive"}}
                        onClick={handleOnClick}
                        variant="contained"
                        endIcon={<SendTwoToneIcon/>}
                        startIcon ="output"
                   />
                </div>
              );
}

export default InputLine;