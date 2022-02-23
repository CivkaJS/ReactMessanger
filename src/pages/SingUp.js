import { useState, useEffect } from "react";
import '../App.scss';
import { Paper, TextField, Button, Link } from "@mui/material";
import { Error } from "@mui/icons-material";
import { Box } from "@mui/system";
import { useLocation, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import firebase from "../service/firebase";

const SingUp = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState(false);
    const [info, setInfo] = useState(false);

    const location = useLocation;
    const navigate = useNavigate();

    let from = location.state?.from?.pathname || '/login';

    useEffect(() => {
        setInfo(false);
      }, [])

    const handeleSubmit = async (event) => {
        event.preventDefault();

        try {
            const auth = getAuth(firebase);
            await createUserWithEmailAndPassword(auth, email, password).then(()=>{
                setInfo(true);
            });
            navigate(from, { replace: true });
        }
        catch (err) {
            setInfo(false);
            setError(err);
        }
    }

    const handleLoginClick = () => {
        navigate('/login', { replace: true });
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
                <h2>Registration</h2>
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
                        <Link onClick={handleLoginClick} sx={{
                            cursor: "pointer",
                            textDecoration: "none",
                            '&:hover': {
                                color: 'red'
                            },
                        }} > Login </Link>
                        {error && <Error>Error</Error>}
                        {info && <h3>Регистрация успешно завершена</h3>}
                        <Button onClick={handeleSubmit} type='submit' sx={{
                            backgroundColor: "chocolate",
                            color: "azure",
                            '&:hover': {
                                backgroundColor: 'burlywood',
                            },
                        }}> Sing Up </Button>
                    </div>
                </Paper>
            </form>
        </Box>
    )
}

export default SingUp;