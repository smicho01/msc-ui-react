import React, {useEffect} from 'react';
import {useApplicationContext} from "../../context/ApplicationContext";
import {useNavigate} from "react-router-dom";

const Logout = () => {
    const { setIsLoggedIn, setToken } = useApplicationContext(); // Assuming you have a setUser function to handle login state
    const navigate = useNavigate()

    useEffect(() => {
        setIsLoggedIn(false)
        setToken(null)
        navigate("/")
    }, [navigate, setIsLoggedIn, setToken]);

    return (
        <>
            <h4 className="page-title">Logout</h4>
        </>
    );
};

export default Logout;
