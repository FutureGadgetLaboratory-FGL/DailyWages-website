import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import LoginForm from '../../components/loginForm/LoginForm'

import './LoginPage.css';

const LoginPage = () => {
    return (
        <>
            <Navbar />
            <div className='form'>
                <LoginForm />
            </div>
        </>
    )
}

export default LoginPage