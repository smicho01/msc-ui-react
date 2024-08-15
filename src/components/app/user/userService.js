import axios from "axios";

const serviceName = 'User Service';

export const findUser = async (params, token) => {
    try {
        return await axios.get('/userservice/user', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }, params: params
        })
    } catch (error) {
        throw new Error(serviceName + ' findUser function threw ' + error);
    }
}

export const healthCheck = async () => {
    try {
        return await axios.get('/userservice/healthcheck', {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    } catch (error) {
        throw new Error(serviceName + ' healthCheck function threw ' + error);
    }
}