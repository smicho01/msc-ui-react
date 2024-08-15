import {useState, useContext, createContext} from 'react';
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
    const [user, setUser] = useState({})

    const value = {
        serviceError, setServiceError,
        userId, setUserId,
        isLoggedIn, setIsLoggedIn,
        token, setToken,
        user, setUser
    };

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