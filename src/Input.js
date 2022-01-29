import React from "react";
import './App.scss';
import { TextField } from '@material-ui/core';
import { Button } from '@mui/material';
import SendTwoToneIcon from '@mui/icons-material/SendTwoTone';


class Input extends React.Component{

    render(){
        return (
                <div className="Input-box">   
                   {/* <textarea className="input-text" placeholder="Ваше сообщение" name="text" onChange={this.props.eventLineUpdate}></textarea> */}
                   <TextField
                        style ={{flexGrow: '15', marginLeft: "10px", marginRight: "20px"}}
                        npmstyle={{ margin: '20px'}}
                        id="outlined-basic"
                        label="Outlined"
                        variant="outlined"
                        value={this.props.inputTextLine}
                        onChange={this.props.eventLineUpdate}
                        autoFocus={true}
                        placeholder="Введите сообщение"
                   />

                   <Button
                        style ={{flexGrow: '1', marginRight: "10px", fontSize: "small", fontFamily: "cursive"}}
                        onClick={this.props.eventClick}
                        variant="contained"
                        endIcon={<SendTwoToneIcon/>}
                        startIcon ="output"
                   />

                   {/* <input className="submit-text" type="submit" onClick={this.props.eventClick}></input> */}
                </div>
              );
    }    
}

export default Input;