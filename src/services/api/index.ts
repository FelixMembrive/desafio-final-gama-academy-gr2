import axios from "axios";

function getTokenFromLocalStorage() {
  const token = localStorage.getItem("user");
  if (token === null) {
    return undefined;
  }
  return token;
}

export const requestApi = axios.create({
  baseURL: "https://tech-delas.herokuapp.com",
  headers: {
    Authorization: `Bearer ${getTokenFromLocalStorage()}`,
  },
});

export const requestApiMultiPart = axios.create({
    baseURL: "https://tech-delas.herokuapp.com",
    headers: {
    //   Authorization: `Bearer ${getTokenFromLocalStorage()}`,
      "Content-Type": "multipart/form-data",
    },
  });
