import React from 'react'
import Navbar from './../Component/Navbar';
import Searchbar from '../Component/Searchbar';
import Tabs from '../Component/Tabs';
import ResultGrid from '../Component/ResultGrid';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Searchbar />
            <Tabs />
            <ResultGrid />
        </div>
    )
}

export default Home