import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import LoginForm from '../../components/loginForm/LoginForm'
import Footer from '../../components/footer/Footer';

import styles from './LoginPage.css';

const LoginPage = () => {
    return (
        <>
            <Navbar />
            <div className={styles.form}>
                <LoginForm />
            </div>
            <Footer />
        </>
    )
}

export default LoginPage