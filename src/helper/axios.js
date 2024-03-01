import axios from 'axios';

export const axiosApi = {
    local: axios.create({
        baseURL: "http://localhost:5050/api/",
        withCredentials: true
    }),
    // remote: axios.create({
    //     baseURL: "https://www.yourwebsite.com/api/"
    // })
}

// axiosApi.local.defaults.headers.common[
//     "Authorization"
// ] = `Bearer ${JSON.parse(localStorage.getItem("refreshToken"))}`