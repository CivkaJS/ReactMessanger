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
    const {name, showName} =useSelector(state => state);
    const [value, setValue] = useState(name);
    const dispatch = useDispatch();

    // const {showName, name} = store.getState();
    // const dispatch = store.dispatch;
    // console.log(showName);
    // console.log(name);

    // const[updateName, setUpdateName] = useState();

    // const setShowNeme = useCallback(() => {
    //     dispatch(toggleShowName);
    // },[dispatch])

    const handleChange = useCallback((event) =>{
        setValue(event.target.value);
    },[])

    const setName = useCallback(() =>{
        dispatch({type: CHANGE_NAME, payload: value });
        setValue('');
    },[dispatch, value])

    return(
        <Box sx={{
            width: '100%',
            height: '90vh',
            margin: '0 auto',
            backgroundColor: 'lightgoldenrodyellow',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '2%',
            }}
    >

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
                {showName && <div>{`Ваше имя профиля: ${name}`}</div>}
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