import { GET_GISTS_SUCCESS, GET_GISTS_REQUEST, GET_GISTS_FAILURE, SET_GISTS_LOADING } from "./actions";

export const STATUSES = {
    IDLE: 0,
    REQUEST: 1,
    SUCSESSS: 2,
    FAILURE: 3,
}

const initialState = {
    gists: [],
    request: STATUSES.IDLE,
    error: null,
    loading: false,
}

const gistsReduser = (state = initialState, action) => {
    switch (action.type) {
        case GET_GISTS_REQUEST:
            console.log("GET_GISTS_REQUEST")
            return {
                ...state,
                request: STATUSES.REQUEST,
            };
        case GET_GISTS_SUCCESS:
            console.log("GET_GISTS_SUCCESS")
            return {
                ...state,
                gists: action.payload,
                request: STATUSES.SUCCESS,
            };
        case GET_GISTS_FAILURE:
            console.log("GET_GISTS_FAILURE")
            return {
                ...state,
                request: STATUSES.FAILURE,
                error: action.payload,
            };
        case SET_GISTS_LOADING:
            console.log("SET_GISTS_LOADING")
            return {
                ...state,
                request: action.status,
                loading: action.progress,
            };
        default:
            return state;
    }
}

export default gistsReduser;
