import axios from "axios";

function getTokenFromLocalStorage() {
    const token = localStorage.getItem("user");
    if (token === null) {
        return undefined;
    }
    return token;
}

const baseApiUrl = "https://tech-delas.herokuapp.com";

export const baseApi = axios.create({
    baseURL: baseApiUrl,
    headers: {
        "Content-Type": "application/json",
    },
});

export const requestApi = axios.create({
    baseURL: baseApiUrl,
    headers: {
        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
    },
});

export const requestApiMultiPart = axios.create({
    baseURL: baseApiUrl,
    headers: {
        //   Authorization: `Bearer ${getTokenFromLocalStorage()}`,
        "Content-Type": "multipart/form-data",
    },
});
