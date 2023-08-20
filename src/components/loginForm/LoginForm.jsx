import React, { useState } from 'react'

import './LoginForm.css';

const LoginForm = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <>
            <div className='login-container'>
                <div className='auth-type'>
                    <button className={isLogin ? '' : 'inactive'} onClick={() => { setIsLogin(true) }}>LOGIN</button>
                    <button className={!isLogin ? '' : 'inactive'} onClick={() => { setIsLogin(false) }}>REGISTER</button>
                </div>
                <form className='auth-form' >
                    {!isLogin &&
                        <>
                            <p>Name</p>
                            <input name='name'/>
                            <p>Email</p>
                            <input name='email' type='email'/>
                            <p>Address</p>
                            <input name='address'/>
                        </>
                    }
                    <p>Mobile Number</p>
                    <div className='mob-no-input'>
                        <input defaultValue="+91" className='form-input'></input>
                        <input name='phone' type='tel' className='form-input'></input>
                    </div>
                    <p>OTP</p>
                    <input name='otp'/>
                    <div className='login-options'>
                        <button type='submit' className='login-button'>{isLogin ? "Login" : "Register"}</button>
                        <div class="divider"></div>
                        <button class="google-signin-button">
                            <img src="../images/google-icon.png" alt="" class="google-icon" />
                            Sign in with Google
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default LoginForm