import * as React from 'react';
import '../App.scss';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { ListItemButton } from '@mui/material';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined';
import LanIcon from '@mui/icons-material/Lan';
import { Link } from "react-router-dom";


const ControlPanel = () => {
    return(
            <Box
                sx={{
                    maxWidth: '100vh',
                    // height: '95vh',
                    margin: '0 auto',
                    backgroundColor: 'goldenrod',
                    // '&:hover': {
                    //   backgroundColor: 'lightgoldenrodyellow',
                    //   opacity: [0.9, 0.8, 0.7],
                    // },
                    }}
                    >
                    <List sx={{display: 'flex'}}>
                        <ListItem>
                            <Link style={{
                                     width: '100%',
                                     textDecoration: "none",
                                    }} 
                                    to={"/"}>
                                    <ListItemButton sx={{
                                                        border: "solid 1px firebrick",
                                                        borderRadius: "20px 5px 5px 5px",
                                                        margin: "0 1vh",
                                                        backgroundColor: 'beige',
                                                        fontSize: "12px",
                                                        '&:active': {
                                                            backgroundColor: 'lightgreen',
                                                        },
                                                       }}>
                                        <CottageOutlinedIcon sx={{
                                                                    marginRight: "20px",
                                                                }}/>
                                        <h3>HOME</h3>                         
                                    </ListItemButton> 
                            </Link>    
                        </ListItem>
                        <ListItem>
                            <Link style={{
                                        width: '100%',
                                        textDecoration: "none",
                                        }} 
                                        to="/profile">
                                        <ListItemButton sx={{
                                                            border: "solid 1px firebrick",
                                                            borderRadius: "5px 5px 5px 5px",
                                                            backgroundColor: 'beige',
                                                            fontSize: "12px",
                                                            '&:active': {
                                                                backgroundColor: 'lightgreen',
                                                            },
                                                            }}>
                                            <AddReactionOutlinedIcon sx={{
                                                                    marginRight: "20px",
                                                                }} />
                                            <h3>PROFILE</h3>  
                                        </ListItemButton>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link style={{
                                        width: '100%',
                                        textDecoration: "none",
                                        }} 
                                        to="/chats">
                                        <ListItemButton sx={{
                                                            border: "solid 1px firebrick",
                                                            borderRadius: "5px 5px 5px 5px",
                                                            margin: "0 1vh",
                                                            backgroundColor: 'beige',
                                                            fontSize: "12px",
                                                            '&:active': {
                                                                backgroundColor: 'lightgreen',
                                                                }
                                                            }}>
                                            <MailOutlineOutlinedIcon sx={{
                                                                    marginRight: "20px",
                                                                }}/>
                                            <h3>CHAT</h3>      
                                        </ListItemButton>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link style={{
                                        width: '100%',
                                        textDecoration: "none",
                                        }} 
                                        to="/gists">
                                        <ListItemButton sx={{
                                                            border: "solid 1px firebrick",
                                                            borderRadius: "5px 20px 5px 5px",
                                                            margin: "0 1vh",
                                                            backgroundColor: 'beige',
                                                            fontSize: "12px",
                                                            '&:active': {
                                                                backgroundColor: 'lightgreen',
                                                                }
                                                            }}>
                                            <LanIcon sx={{
                                                            marginRight: "20px",
                                                        }}/>
                                            <h3>GISTs</h3>      
                                        </ListItemButton>
                            </Link>
                        </ListItem>
                    </List>
            </Box> 
        )
}

export default ControlPanel;