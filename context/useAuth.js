import React, { useContext } from "react";
import jwtDecode from "jwt-decode";

import AuthContext from "./context";

import { removeToken, setToken } from "../storage/storage";

const useAuth = () => {
  const { setUser } = useContext(AuthContext);
  const getUser = async (authToken) => {
    await setToken(authToken);
    const userProfile = jwtDecode(authToken);
    setUser(userProfile);
    console.log("User profile:", userProfile);
  };

  const logOut = async () => {
    await removeToken();
    setUser(null);
  };

  return { getUser, logOut };
};

export default useAuth;
