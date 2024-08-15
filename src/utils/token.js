import {jwtDecode} from "jwt-decode";

export const decodeJwt = (token) => {
    try {
        // Decode token
        const decoded = jwtDecode(token);
        return decoded;
    } catch (error) {
        console.error('Failed to decode JWT:', error);
        return null;
    }
};

export const processDecodedToken = (decodedToken) => {
    return {
        college: decodedToken.college,
        email: decodedToken.email,
        name: decodedToken.name,
        username: decodedToken.preferred_username,
        roles: decodedToken.realm_access.roles
    }
}