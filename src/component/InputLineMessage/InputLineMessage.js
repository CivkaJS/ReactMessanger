import React from "react"
import "../../App.scss"
import { TextField } from "@mui/material"

const inputLineMessage = ( value, handleOnChange ) => {
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
}

export default inputLineMessage;