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
            <div className="fixed inset-x-0 bottom-0 h-1/5 bg-linear-to-t from-black/30 to-transparent"></div>
        </div>
    )
}

export default Home