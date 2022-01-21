import React from 'react';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Blankheader from '../H&F/Blankheader';
import Loginform from '../component/Login/Loginform';

function Login(props) {
    return (
        <div>
           <Blankheader/>
           <Loginform/>
        </div>
    );
}

export default Login;