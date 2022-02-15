export const GET_GISTS_REQUEST = "GISTS::GET_GISTS_REQUEST";
export const GET_GISTS_SUCCESS = "GISTS::GET_GISTS_SUCCESS";
export const GET_GISTS_FAILURE = "GISTS::GET_GISTS_FAILURE";
export const SET_GISTS_LOADING = "GISTS::SET_GISTS_LOADING";

export const getGistsRequest = () => ({
  type: GET_GISTS_REQUEST, 
});

export const getGistsSuccess = (data) => ({
  type: GET_GISTS_SUCCESS,
  payload: data,
});

export const getGistsFailure = (err, counter) => ({
  type: GET_GISTS_FAILURE,
  payload: err,
  counter,
});

export const setGistsLoading = (progress, status) => ({
  type: SET_GISTS_LOADING,
  progress, 
  status,
});