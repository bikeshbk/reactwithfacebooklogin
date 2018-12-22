import React from 'react';
import Login from '../login/Login';
import Logo from './facebook.png';

const Header = () => {
    return(
        <div className="header">
            <div className="sub-header">
                <div>
                    <img src={Logo} className="logo" alt="logo"/>
                </div>
                <div className="login">
                    <Login/>
                </div>
            </div>
        </div>
    );
}

export default Header;
