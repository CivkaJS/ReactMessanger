import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import ClearIcon from '@mui/icons-material/Clear';
import { Button } from '@mui/material';
// import { useDispatch, useSelector } from 'react-redux';
// import { deleteChat } from '../store/profile/actions';


function AlignItemsList(props) {

  const{ addName, handeleDelete } = props;

  // const dispatch = useDispatch();
  // const message = useSelector(state => state.profile.messageList);
  // const chat = useSelector(state => state.profile.chatList);

  // const handleDelete = () => {
  //   const id = chat[props.numKey].id;
  //   delete message[id];
  //   dispatch(deleteChat(props.numKey));
  // }

  return (
    <List className='boxNewChat'>
      <ListItem className='boxContentNewChat'>
        <ListItemText style={{ color: "black" }}
          primary={<Typography type="body2" style={{ fontSize: '12px' }}>
            {addName}    
          </Typography>}
        />
        <Button onClick={handeleDelete} style={{ border: 'none', backgroundColor: 'inherit',minWidth: "0px" }}>
          <ClearIcon sx={{ width: '0.7em',height: '0.7em',}} />
        </Button>
      </ListItem>
    </List>
  );
}

export default AlignItemsList;
