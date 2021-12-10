// add Authorization as knox-token if token exists
export const tokenConfig = (getState) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const token = getState().authReducer.token;
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }
  return config;
};
