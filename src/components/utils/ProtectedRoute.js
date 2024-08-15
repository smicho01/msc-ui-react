// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import {useApplicationContext} from "../../context/ApplicationContext"; // Import your auth check function

const ProtectedRoute = ({ element }) => {
    const { isLoggedIn } = useApplicationContext();
    return isLoggedIn ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
