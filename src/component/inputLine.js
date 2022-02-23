import React, { useCallback, useState } from "react";
import '../App.scss';
import { TextField } from '@material-ui/core';
import { Button } from '@mui/material';
import SendTwoToneIcon from '@mui/icons-material/SendTwoTone';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { INPUT_DB_MESSAGE } from "../store/profile/actions";
import { getDatabase, ref, set, push } from "firebase/database";
import firebase from "../service/firebase";
// import { addMessageSaga } from "../store/profile/actions";

const InputLine = () => {

     const [value, setValue] = useState('');
     const [updateSet, setUpdateSet] = useState(false);
     const name = useSelector(state => state.profile.name);
     const dispatch = useDispatch();
     const { chatId } = useParams();

     const firebaseBox = {
          addres: `/messages/${chatId}`,
          action: INPUT_DB_MESSAGE,

          data: {
               text: value,
               author: name,
               time: new Date().toLocaleTimeString(),
          }
     }

     //Можно ли эту функцию как отдельный компонент в папочке разместить Set, Get, Del
     const SetFireBase = async (addres, data, action) => {
          //Ругается что  useState, useDispatch нужно положить в корневую папку
          const db = getDatabase(firebase);
          const messageRef = ref(db, addres);
          const newMessageRef = push(messageRef);
      
          await set(newMessageRef, data)
              .then(() => {
                  updateSet ? setUpdateSet(false) : setUpdateSet(true);
                  dispatch({ type: action, payload: updateSet });
              });
      }

     const handleOnClick = useCallback(() => {
           SetFireBase(firebaseBox.addres, firebaseBox.data, firebaseBox.action);
           setValue('');
     }, [value, chatId])

     const handleOnChange = (event) => {
          setValue(event.target.value);
     }

     return (
          <div className="Input-box">
               {/* <textarea className="input-text" placeholder="Ваше сообщение" name="text" onChange={this.props.eventLineUpdate}></textarea> */}
               <TextField
                    style={{ flexGrow: '15', marginLeft: "10px", marginRight: "20px" }}
                    npmstyle={{ margin: '20px' }}
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    value={value}
                    onChange={handleOnChange}
                    autoFocus={true}
                    placeholder="Введите сообщение"
               />
               <Button
                    style={{ flexGrow: '1', marginRight: "10px", fontSize: "small", fontFamily: "cursive" }}
                    onClick={handleOnClick}
                    variant="contained"
                    endIcon={<SendTwoToneIcon />}
                    startIcon="output"
               />
          </div>
     )
}
export default InputLine;