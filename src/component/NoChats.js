import Box from '@mui/material/Box';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const NoChats = () => {

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
        <ErrorOutlineIcon/>
        <div>Чат не существует</div>
    </Box>
    )
}

export default NoChats;