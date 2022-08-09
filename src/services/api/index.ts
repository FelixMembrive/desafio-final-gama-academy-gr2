import axios from "axios";

function getTokenFromLocalStorage() {
    const token = localStorage.getItem("user");
    if (token === null) {
        return undefined;
    }
    return token;
}

const baseApiUrl = "https://tech-delas.herokuapp.com/"

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

export const requestApiMultiPartAuth = axios.create({
    baseURL: baseApiUrl,
    headers: {
        //   Authorization: `Bearer ${getTokenFromLocalStorage()}`,
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZWM1MjU5ZjAzZWNhY2Y3ZTgyMjYzZSIsImVtYWlsIjoiZmVsaXgubWVtYnJpdmVAZ21haWwuY29tIiwibmFtZSI6InRlc3RlIiwiaWF0IjoxNjYwMDExMTkxLCJleHAiOjE2NjAyNzAzOTF9.j-LhmhLd1G4aiWnE8bMGXi6IO3IkM73XLgFRnPsbil0"
    },
});


