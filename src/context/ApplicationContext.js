import {useState, useContext, createContext, useEffect} from 'react';
import PropTypes from 'prop-types';

export const ApplicationContext = createContext();

export const ApplicationProvider = ({ children }) => {
    const [serviceError, setServiceError] = useState({
        hasError: false,
        recoverable: true,
    });

    const [userId, setUserId] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [token, setToken] = useState('');

    const value = {
        serviceError, setServiceError,
        userId, setUserId,
        isLoggedIn, setIsLoggedIn,
        token, setToken
    };

    // useEffect(() => {
    //     setUserId("userid-abc-123")
    // }, []);

    return (
        <ApplicationContext.Provider value={value}>
            {children}
        </ApplicationContext.Provider>
    );
};

export const useApplicationContext = () => {
    return useContext(ApplicationContext);
};

ApplicationProvider.propTypes = {
    children: PropTypes.element,
};