import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
// import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';


 function AlignItemsList(props) {
  return (
    <a href='#' style={{
                        textDecoration: "none",
                        width: '80%'
                        }}>
    <List sx={{ width: '100%', 
                maxWidth: 360, 
                bgcolor: 'background.paper', 
                paddingTop: 0, 
                paddingBottom: 0,
                }}
        style={{boxShadow: "10px 0px 10px 0px rgb(4 29 49 / 20%)",
                marginTop: "5px",
                borderRadius: "5px 20px 5px",
                backgroundColor: "lightgreen"
              }}
                >
      <ListItem alignItems="flex-start" style={{paddingTop: "0px",
                                                paddingBottom: "0px"
                                               }}>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp"
                  //src="/static/images/avatar/1.jpg"
                  src={props.addFoto}  
                  />
        </ListItemAvatar>
        <ListItemText
                     style={{color: "black"}}
                     primary= {props.addName}
                     secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                    {props.addStatus}
                                    </Typography>
                                </React.Fragment>
                                }
        />
      </ListItem>
      {/* <Divider variant="fullWidth"/> */}
    </List>
    </a>
  );
}
export default AlignItemsList;