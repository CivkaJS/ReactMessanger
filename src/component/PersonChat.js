import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import ClearIcon from '@mui/icons-material/Clear';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { deleteChat } from '../store/profile/actions';


 function AlignItemsList(props) {

  const dispatch = useDispatch();
  const message = useSelector(state => state.profile.messageList);
  const chat = useSelector(state => state.profile.chatList);

  const  handleDelete = () => {
    const id = chat[props.numKey].id;
    delete message[id];

    dispatch(deleteChat(props.numKey));
    // dispatch({type: DELETE_MESSAGES});
  }

  return (
    <List sx={{ width: '100%', 
                maxWidth: 360, 
                bgcolor: 'background.paper', 
                paddingTop: 0, 
                paddingBottom: 0,
                }}
        style={{boxShadow: "10px 0px 10px 0px rgb(4 29 49 / 20%)",
                marginTop: "5px",
                minHeight: "6vh",
                borderRadius: "5px 20px 5px",
                backgroundColor: "lightgreen",
                display: "flex",
              }}
                >
      <ListItem alignItems="flex-start" style={{paddingTop: "0px",
                                                paddingBottom: "0px",
                                                display: 'flex',
                                                alignItems: 'center'
                                               }}>
        <ListItemText
                     style={{
                              color: "black",
                            }}
                     primary= {<Typography type="body2" style={{ fontSize: '12px' }}>
                                            {props.addName}
                                </Typography>}
        />
        <Button onClick={handleDelete} style={{
                                                            border: 'none',
                                                            backgroundColor: 'inherit',
                                                            minWidth: "0px"
                                                        }}>
          <ClearIcon sx={{
                              width: '0.7em',
                              height: '0.7em',
                        }}/>
        </Button>
      </ListItem>
    </List>
    
    // </div>
  );
}

export default AlignItemsList;
