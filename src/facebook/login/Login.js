import React from 'react';

const Login = () => {
    return(
        <div className="login">
            <div>
                <label for="email" className="email">Email or Phone</label>
                <label for="password" className="password">Password</label>
            </div>
            <div>
                <input type="email" id="email"/>
                <input type="password" id="password"/>
                <input type="submit" id="login-button" value="Log In"/>
            </div>
            <div className="forgot">Forgot account?</div>
        </div>
    );
}

export default Login;