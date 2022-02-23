import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Box className='PageBox'>
            <h2 style={{marginTop: '60px'}}>HOME</h2>
            <div className='boxHomeNavigationLink'>
                <Link className='linkHomeNavigation' to="/login">LOGIn</Link>
                <Link className='linkHomeNavigation' to="/singup">SING Up</Link>
            </div>
        </Box>
    )
}
export default Home;