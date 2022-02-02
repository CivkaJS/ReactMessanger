import Box from '@mui/material/Box';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import AddButton from '../component/AddButton';
import PersonChat from '../component/Chats';
import { useParams } from "react-router-dom";

const NoChats = (props) => {
    let {chatId} = useParams();

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
        <div className="messagePage">
              <div className='listPage'>
                <AddButton />
                <PersonChat newChat={props.chats} idNewChat={chatId}/>
              </div>
              <div className="Message-box noneMessageBox">
                <ErrorOutlineIcon/>
                <div>Чат не существует</div>
              </div>
            </div> 
    </Box>
    )
}

export default NoChats;