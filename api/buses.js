import apiInstance from ".";

export const getBusesAPI = (from, to) =>
  apiInstance.post("/bus/get-buses", { from, dest: to });
