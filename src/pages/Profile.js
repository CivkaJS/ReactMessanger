import Box from '@mui/material/Box';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
// import {store} from '../store/index'
import { toggleShowName } from '../store/profile/actions';

const Profile = () => {

    const {name, showName} =useSelector(state => state)
    const dispatch = useDispatch();

    // const {showName, name} = store.getState();
    // const dispatch = store.dispatch;
    // console.log(showName);
    // console.log(name);

    // const[updateName, setUpdateName] = useState();

    const setShowName = useCallback(() => {
        dispatch(toggleShowName);
        // setUpdateName({});
    },[dispatch])

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

        <div>
            <h4>Profile</h4>
            <input
                type="checkbox"
                checked={showName}
                value={showName}
                onChange={setShowName}
            />
            {showName && <div>{name}</div>}
        </div>
    </Box>   
    )
}

export default Profile;