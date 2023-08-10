import React from 'react'

import SearchBar from './SearchBar/SearchBar';
import PopularServices from './PopularServices/PopularServices.js';
import './home.css';



const Home = () => {

    return (
        <>
            <div className='home'>
                <div className=''>
                    <h1>Daily Wages</h1>
                    <h2>Directly connect to your local workers</h2>
                    <SearchBar />
                </div>
                <PopularServices />
            </div>
        </>
    )
}

export default Home
