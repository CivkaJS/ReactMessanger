import { CHANGE_ENABLE_LOG } from "./actions";

const initialState = {
    LoginEnable: 'block',
    LogoutEnable: 'none',
}

const LoginReduser = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_ENABLE_LOG:
            return {
                ...state,
                LoginEnable: (action.Log === 'login')? 'block': 'none',
                LogoutEnable: (action.Log === 'logout')? 'block': 'none',
            };
        default:
            return state;
    }
}

export default LoginReduser;