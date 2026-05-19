import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './compnent/navbar'
import Home from "./Page/Home"
import About from './Page/About'
import Shop from './Page/Shop'
import Men from './Page/Men';
import Women from './Page/Women';
import Kids from './Page/Kids';
import ErrorSection7 from './Page/404'
import All from './Page/All';

const App = () => {
    return (
        <div className='h-screen bg-black overflow-hidden text-white'>
            <Navbar />
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/shop' element={<Shop />}>
                    <Route path='men' element={<Men />} />
                    <Route path='women' element={<Kids />} />
                    <Route path='kids' element={<Women />} />
                    <Route index element={<All />} />
                </Route>
                <Route path='*' element={<ErrorSection7 />} />

            </Routes>
        </div>
    )
}

export default App