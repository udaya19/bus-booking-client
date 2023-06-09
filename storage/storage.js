import * as SecureStore from "expo-secure-store";

import authToken from "../config/authToken";

import { jwtDecode } from "jwt-decode";

export const setToken = async (value) => {
  try {
    await SecureStore.setItemAsync(authToken, value);
  } catch (error) {
    console.log("SetTokenError:", error);
  }
};

export const getToken = async () => {
  try {
    const token = await SecureStore.getItemAsync(authToken);
    return token;
  } catch (error) {
    console.log("SetTokenError:", error);
  }
};

export const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(authToken);
  } catch (error) {
    console.log("RemoveTokenError:", error);
  }
};

export const getUser = async () => {
  const token = await getToken();
  if (token) {
    return jwtDecode(token);
  }
  return null;
};
