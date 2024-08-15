import {jwtDecode} from "jwt-decode";

/**
 * Decode a JWT token
 * @param {string} token - JWT token to decode
 * @returns {object|null} - Decoded payload or null if decoding fails
 */
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