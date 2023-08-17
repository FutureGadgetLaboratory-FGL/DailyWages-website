import React, { useState } from 'react'

import './LoginForm.css';

const LoginForm = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <>
            <div className='login-container'>
                <div className='auth-type'>
                    <button className={isLogin ? 'colored' : ''} onClick={() => { setIsLogin(true)}}>Login</button>
                    <button className={!isLogin ? 'colored' : ''} onClick={() => { setIsLogin(false) }}>SignUp</button>
                </div>
                <form className='auth-form' >

                </form>
            </div>
        </>
  )
}

export default LoginForm