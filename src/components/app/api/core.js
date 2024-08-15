import axios from 'axios';

// Get token from somewhere i.e., localStorage
let token = localStorage.getItem('token');

const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
};

const instance = axios.create({
    headers,
});

// Add a request interceptor
instance.interceptors.request.use((config) => {
    // Do something before request is sent
    config.headers.Authorization = 'Bearer ' + token;
    return config;
}, (error) => {
    // Do something with request error
    return Promise.reject(error);
});

export default {
    get: (endpoint, params) =>
        instance({
            method: 'GET',
            url: endpoint,
            params: params,
        }),
    post: (endpoint, params, data) =>
        instance({
            method: 'POST',
            url: endpoint,
            params: params,
            data,
        }),
    put: (endpoint, params, data) =>
        instance({
            method: 'PUT',
            url: endpoint,
            params: params,
            data,
        }),
    delete: (endpoint, params) =>
        instance({
            method: 'DELETE',
            url: endpoint,
            params: params,
        }),
};