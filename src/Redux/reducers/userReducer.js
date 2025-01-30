import { clearTokens, saveTokens } from "../../utils/authHelper";
import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAIL,
  LOGGED_OUT,
  SET_ERROR,
  REFRESHED_TOKEN,
} from "../types/userTypes";

const initialState = {
  data: [],
  error: false,
  loading: false,
  isLoggedIn: Boolean(localStorage.getItem("userToken")), 
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return { ...state, loading: true };
    case FETCH_SUCCESS:
      if (action.fetchReqType === "login") {
        saveTokens(action.payload)
        return { ...state, loading: false, isLoggedIn: true };
      } else if (action.fetchReqType === "getUserData") {
        return {
          ...state,
          data: action.payload,
          loading: false,
          isLoggedIn: true,
        };
      }
      break;
    case FETCH_FAIL:
      const errorMessage = action.payload?.response?.data?.message;
      if (errorMessage === "Invalid credentials") {
        return { ...state, error: true, loading: false };
      } 
      return state;
    case REFRESHED_TOKEN:
      saveTokens(action.payload.data);
      return state;
    case SET_ERROR:
      return { ...state, error: false };
    case LOGGED_OUT:
      clearTokens();
      return { ...state, data: [], isLoggedIn: false };
    default:
      return state;
  }
};
export default userReducer;

