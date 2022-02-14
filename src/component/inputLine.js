import React, { useCallback, useState } from "react";
import '../App.scss';
import { TextField } from '@material-ui/core';
import { Button } from '@mui/material';
import SendTwoToneIcon from '@mui/icons-material/SendTwoTone';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import inputLineMessageContainer from "./InputLineMessage/InputLineMessageContainer";
// import { addMessage } from '../store/profile/actions';
import { addMessageSaga } from "../store/profile/actions";

const InputLine = () =>{

     const [value, setValue] = useState('');
     const name = useSelector(state => state.profile.name);
     const dispatch = useDispatch();
     const {chatId} = useParams();
     

     const handleOnChange = (event) =>{
          setValue(event.target.value);
          console.log(value);
     }

     const handleOnClick = useCallback(() => {
          add();
     },[value, chatId, dispatch])

     const add = () =>{
         value? dispatch ( addMessageSaga(chatId, {
                                             text: value,
                                             author: name,
                                             time: new Date().toLocaleTimeString(),
                                        })) : setValue('');
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

                   {/* <inputLineMessageContainer
                                             value={value}
                                             setValue={setValue}
                                                  /> */}

                   <Button
                        style ={{flexGrow: '1', marginRight: "10px", fontSize: "small", fontFamily: "cursive"}}
                        onClick={handleOnClick}
                        variant="contained"
                        endIcon={<SendTwoToneIcon/>}
                        startIcon ="output"
                   />
                </div>
              )
}

export default InputLine;