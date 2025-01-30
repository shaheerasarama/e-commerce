export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const LOGGED_OUT = "LOGGED_OUT";
export const REFRESHED_TOKEN = "REFRESHED_TOKEN";
export const SET_ERROR = "SET_ERROR";

export const fetchStart = () => ({ type: FETCH_START });
export const fetchSuccess = (data, fetchType) => ({
  type: FETCH_SUCCESS,
  payload: data,
  fetchReqType : fetchType
});
export const fetchFail = (error) => ({
  type: FETCH_FAIL,
  payload: error,
});
export const loggedOut = () => ({ type: LOGGED_OUT });
export const refreshToken = (response) => {
  return {
    type : REFRESHED_TOKEN,
    payload : response
  }
}
export const setError = () => ({ type: SET_ERROR });
