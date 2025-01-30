export const saveTokens = ({ accessToken, refreshToken }) => {
  localStorage.setItem("userToken", JSON.stringify(accessToken));
  localStorage.setItem("userRefreshToken", JSON.stringify(refreshToken));
};

export const clearTokens = () => {
  localStorage.removeItem("userToken");
  localStorage.removeItem("userRefreshToken");
  localStorage.removeItem("userId");
};
