import apiInstance from ".";

export const loginApi = (email, password) =>
  apiInstance.post("/user/login", { email, password });
