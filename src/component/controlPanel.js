import * as React from 'react';
import '../App.scss';
import { Box } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined';
import ButtonControlPanelContainer from './ButtonControlPanel/ButtonControlPanelConteiner';
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import LanIcon from '@mui/icons-material/Lan';
import { Link } from "react-router-dom";
import useAuth from "../Hook/useAuth";

const ControlPanel = () => {

    const auth = useAuth();
    const location = useLocation;
    const navigate = useNavigate();
    const spaceIcon = '15px';

    let from = location.state?.from?.pathname || '/'; //Если не определено где мы находимся преходим по указанию за 'ИЛИ'?


    const handlerOnClick = async (event) => {

        event.preventDefault();

        await auth.signout(
            () => {
                navigate(from, { replace: true })
            }
        )
    }

    return (
        <Box
            sx={{
                maxWidth: '100%',
                margin: '0 auto',
                backgroundColor: 'goldenrod',
                display: "flex",
                justifyContent: "space-around",
            }}
        >

            <Link style={{ textDecoration: "none", }} to='/'>
                <ButtonControlPanelContainer
                    inputIcon={<CottageOutlinedIcon sx={{ marginRight: `${spaceIcon}` }} />}
                    nameButton={'HOMe'}
                    position={'first'}
                />
            </Link>

            <Link style={{ textDecoration: "none", }} to='/profile'>
                <ButtonControlPanelContainer
                    inputIcon={<AddReactionOutlinedIcon sx={{ marginRight: `${spaceIcon}` }} />}
                    nameButton={'PROFILe'}
                    position={'center'}
                />
            </Link>

            <Link style={{ textDecoration: "none", }} to='/chats'>
                <ButtonControlPanelContainer
                    inputIcon={<MailOutlineOutlinedIcon sx={{ marginRight: `${spaceIcon}` }} />}
                    nameButton={'CHAt'}
                    position={'center'}
                />
            </Link>

            <Link style={{ textDecoration: "none", }} to='/gists'>
                <ButtonControlPanelContainer
                    inputIcon={<LanIcon sx={{ marginRight: `${spaceIcon}` }} />}
                    nameButton={'GISTs'}
                    position={'center'}
                />
            </Link>

            <Link style={{ textDecoration: "none", display: auth.user? `none`: 'block' }} to='/login'>
                <ButtonControlPanelContainer
                    inputIcon={<AccountCircleOutlinedIcon sx={{ marginRight: `${spaceIcon}` }} />}
                    nameButton={'LOG In'}
                    position={'last'}
                />
            </Link>

            <button onClick={handlerOnClick}
                style={{ textDecoration: "none", display: auth.user? `block`: 'none', border: 'none', backgroundColor: 'inherit' }} >
                <ButtonControlPanelContainer
                    inputIcon={<LoginOutlinedIcon sx={{ marginRight: `${spaceIcon}` }} />}
                    nameButton={'LOG OUt'}
                    position={'last'}
                />
            </button>

        </Box>
    )
}
export default ControlPanel;