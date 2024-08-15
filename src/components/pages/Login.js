import React, {useState} from 'react';
import {useApplicationContext} from "../../context/ApplicationContext";
import {decodeJwt, processDecodedToken} from "../../utils/token";
import {useNavigate} from "react-router-dom";
import {UrlSearchParamBuilder} from "../../utils/UrlSearchParamBuilder";
import {findUser} from "../app/user/userService";

const Login = () => {
    const { setIsLoggedIn, setToken, setUser } = useApplicationContext(); // Assuming you have a setUser function to handle login state
    const [username, setUsername] = useState('smicho01');
    const [password, setPassword] = useState('password123');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const processForm = async (event) => {
        event.preventDefault(); // Prevent the default form submission

        if (!username || !password) {
            setError('Please enter both username and password.');
            return;
        }

        // Create URLSearchParams object for x-www-form-urlencoded format
        const params = new URLSearchParams();
        params.append('username', username);
        params.append('password', password);
        params.append('client_id', 'academichain_ui');
        params.append('grant_type', 'password');

        try {
            // Make API call to authenticate user
            const response = await fetch(process.env.REACT_APP_KEYCLOAK_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: params.toString(), // Convert URLSearchParams to string
            });

            if (!response.ok) {
                throw new Error('Login failed. Please check your username and password.');
            }
            const result = await response.json();

            if(result.access_token && result.access_token !== '') {
                setToken(result.access_token)
                const decodedJwt = decodeJwt(result.access_token)
                //console.log(decodedJwt)
                const decodedUserData = processDecodedToken(decodedJwt)
                //console.log(decodedUserData)

                try {
                    const getUserParams = new UrlSearchParamBuilder()
                        .setField('username').setValue(decodedUserData.username).getUrlSearchParams();
                    const getUserResponse = await findUser(getUserParams, result.access_token);
                    if (getUserResponse.status === 200) {
                        console.log(getUserResponse.data)
                        setIsLoggedIn(true) // Set actual variable
                        setUser(getUserResponse.data)
                    }
                } catch (err) {

                }

                navigate("/user-account")
            }

        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <>
            <h4 className="page-title">Login</h4>
            <div className="row">
                <div className="col-5">
                    <form className="needs-validation" id="login-form" noValidate onSubmit={processForm}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                name="usernameLogin"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                name="passwordLogin"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        {error && <div className="alert alert-danger">{error}</div>}

                        <div className="row v-center mt-15">
                            <div className="col-lg-7 tablet-lg-top">
                                <div className="checkbox checkbox-primary ml-10">
                                    <label className="hidden">
                                        <input type="checkbox" />
                                    </label>
                                    <input id="checkbox-login" type="checkbox" />
                                    <label htmlFor="checkbox-login"><span>Remember Me</span></label>
                                </div>
                            </div>
                            <div className="col-lg-5 text-right">
                                <button type="submit" className="btn btn-primary tablet-lg-fw">
                                    <i className="bi-unlock mr-5"></i> <span>Sign In</span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
