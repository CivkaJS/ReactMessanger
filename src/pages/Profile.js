// import Box from '@mui/material/Box';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { CHANGE_NAME } from '../store/profile/actions';
import { TextField, Button, Box } from '@mui/material';
import SendTwoToneIcon from '@mui/icons-material/SendTwoTone';
// import {store} from '../store/index'
// import { toggleShowName } from '../store/profile/actions';

const Profile = () => {
    let name = useSelector(state => state.profile.name);
    const [value, setValue] = useState('');
    const [,setActive] = useState(name);
    const dispatch = useDispatch();

    const handleChange = useCallback((event) =>{
        setValue(event.target.value);
    },[])

    const setName = useCallback(() =>{
        setActive(value);
        dispatch({type: CHANGE_NAME, payload: value });
        setValue('');
    },[dispatch, value])


    return(
        <Box className='PageBox'>

        <div className='profileBox'>
            <h2>Profile</h2>

            <TextField
                        npmstyle={{ margin: '20px'}}
                        id="outlined-basic"
                        label="Outlined"
                        variant="outlined"
                        value={value}
                        onChange={handleChange}
                        autoFocus={true}
                        placeholder="Введите имя профиля"
                   />
                <div>{`Ваше имя профиля: ${name}`}</div>
            <Button
                        style ={{fontFamily: "cursive"}}
                        onClick={setName}
                        variant="contained"
                        endIcon={<SendTwoToneIcon/>}
                        startIcon ="Подтвердить"
                   />
            
        </div>
    </Box>   
    )
}

export default Profile;