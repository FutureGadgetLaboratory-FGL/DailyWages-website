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
                            <input name='name'/>
                            <p>Email</p>
                            <input name='email' type='email'/>
                            <p>Address</p>
                            <input name='address'/>
                        </>
                    }
                    <p>Mobile Number</p>
                    <div className={styles.mobNoInput}>
                        <input defaultValue="+91" className={styles.formInput}></input>
                        <input name='phone' type='tel' className={styles.formInput}></input>
                    </div>
                    <p>OTP</p>
                    <input name='otp'/>
                    <div className={styles.loginOptions}>
                        <button type='submit' className={styles.loginButton}>{isLogin ? "Login" : "Register"}</button>
                        <div className={styles.divider}></div>
                        <button className={styles.googleSigninButton}>
                            <img src="../images/google-icon.png" alt="" className={styles.googleIcon} />
                            Sign in with Google
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default LoginForm