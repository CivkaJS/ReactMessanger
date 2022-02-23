import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../Hook/useAuth";

const RequiredAuth = () => {
    const location = useLocation();
    const auth = useAuth();

    if (!auth.user) {  
        //Не получилось использовать dispatch один раз когда меняется состоянии почему так и не понял      
        // !(log==='login')? dispatch(changeItem('login')):setLog('login');
        // setLog('login');

        // dispatch(changeItem('login'));

        return <Navigate to='/login' state={{ from: location }} />
    }

    return <Outlet />
}

export default RequiredAuth;
