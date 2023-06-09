import React, { useContext } from "react";
import jwtDecode from "jwt-decode";

import AuthContext from "./context";

import { setToken } from "../storage/storage";

const useAuth = () => {
  const { setUser } = useContext(AuthContext);
  const getUser = async (authToken) => {
    await setToken(authToken);
    const userProfile = jwtDecode(authToken);
    setUser(userProfile);
    console.log("User profile:", userProfile);
  };
  return { getUser };
};

export default useAuth;
