import jwtDecode from "jwt-decode";

import { getToken } from "../storage/storage";

export default getLoggedInUser = async () => {
  const token = await getToken();
  if (token) {
    return jwtDecode(token);
  }
  return null;
};
