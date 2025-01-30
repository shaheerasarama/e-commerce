import axios from "axios";
import {
  fetchFail,
  fetchStart,
  fetchSuccess,
  loggedOut,
  refreshToken,
} from "../types/userTypes";

export const userLogin = (userData) => {
  return async (dispatch) => {
    dispatch(fetchStart());
    try {
      let response = await axios.post(
        `https://dummyjson.com/auth/login`,
        {
          username: userData.userName,
          password: userData.password,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = response.data;
      dispatch(fetchSuccess(data, "login"));
    } catch (error) {
      dispatch(fetchFail(error));
    }
  };
};

export const getUserData = async (dispatch) => {
  dispatch(fetchStart());
  try {
    let response = await axios.get("https://dummyjson.com/auth/me", {
      headers: {
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem("userToken")
        )}`,
      },
    });
    dispatch(fetchSuccess(response.data, "getUserData"));
  } catch (error) {
    if (error.response?.data?.message === "Token Expired!") {
      try {
        let response = await axios.post(
          "https://dummyjson.com/auth/refresh",
          {
            refreshToken: JSON.parse(localStorage.getItem("userRefreshToken")),
          },
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        dispatch(refreshToken(response));
        await getUserData(dispatch);
      } catch (refreshError) {
        dispatch(loggedOut());
      }
    }
  }
};
