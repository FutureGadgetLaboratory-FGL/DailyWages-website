import React, { useState } from 'react'

import styles from './LoginForm.module.css';

const LoginForm = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <>
            <div className={styles.loginContainer}>
                <div className={styles.authType}>
                    <button className={isLogin ? '' : styles.inactive} onClick={() => { setIsLogin(true) }}>LOGIN</button>
                    <button className={!isLogin ? '' : styles.inactive} onClick={() => { setIsLogin(false) }}>REGISTER</button>
                </div>
                <form className={styles.authForm} >
                    {!isLogin &&
                        <>
                            <p>Name</p>
                            <input name='name' />
                            <p>Email</p>
                            <input name='email' type='email' />
                            <p>Address</p>
                            <input name='address' />
                        </>
                    }
                    <p>Mobile Number</p>
                    <div className={styles.mobileNoInput}>
                        <input defaultValue="+91" className={styles.authForm}></input>
                        <input name='phone' type='tel' className={styles.authForm}></input>
                    </div>
                    <p>OTP</p>
                    <input name='otp' />
                    <div className={styles.loginOptions}>
                        <button type='submit' className={styles.loginButton}>{isLogin ? "Login" : "Register"}</button>
                        <div class={styles.divider}></div>
                        <button class={styles.googleSigninButton}>
                            <img src="../images/google-icon.png" alt="" class={styles.googleIcon} />
                            Sign in with Google
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default LoginForm