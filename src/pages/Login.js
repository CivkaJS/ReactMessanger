import { useState, } from "react";
import '../App.scss';
import { Paper, TextField, Button, Link } from "@mui/material";
import { Error } from "@mui/icons-material";
import { Box } from "@mui/system";
import useAuth from "../Hook/useAuth";
import { useNavigate, useLocation } from "react-router-dom";



const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState(false);
    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();


    let from = location.state?.from?.pathname || '/profile';

    const handeleSubmit = async (event) => {
        event.preventDefault();

        await auth.signin({ email, password }, () => { navigate(from, { replace: true })})
        .then(setError(true))
    }

    const handleSignUpClick = () => {
        navigate('/signup', { replace: true });
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    return (
        <Box className='PageBox'>
            <form className="loginBox" onSubmit={handeleSubmit}>
                <h2>Open chat</h2>
                <Paper className="loginInputBox" sx={{ backgroundColor: "initial" }} >
                    <TextField sx={{ width: '100%' }}
                        placeholder='Input your e-mail'
                        type='email'
                        label="E-mail"
                        autoFocus={true}
                        onChange={handleEmailChange}
                        name={'email'}
                        value={email}
                    />
                    <TextField sx={{ width: '100%' }}
                        placeholder='Input your password'
                        type='password'
                        label="Password"
                        name={'password'}
                        onChange={handlePasswordChange}
                        value={password}
                    />
                    <div className="boxLoginSubmit">
                        <Link onClick={handleSignUpClick} sx={{
                            cursor: "pointer",
                            textDecoration: "none",
                            '&:hover': {
                                color: 'red'
                            },
                        }} > Sign Up </Link>
                        {error && <Error>Error</Error>}
                        <Button onClick={handeleSubmit} type='submit' sx={{
                            backgroundColor: "chocolate",
                            color: "azure",
                            '&:hover': {
                                backgroundColor: 'burlywood',
                            },
                        }}> Log in </Button>
                    </div>
                </Paper>
            </form>
        </Box>
    )
}

export default Login;