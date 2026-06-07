import React from 'react'
import { GIF, Image, Video } from './API/mediaApi'
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import Collectionpage from './Pages/Collectionpage';
import { ToastContainer} from "react-toastify";

const App = () => {
  return (
    <div className='bg-(--c5) select-none bg-blend-overlay  min-h-screen '>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collectionpage />} />
      </Routes>

      <ToastContainer/>
    </div>
  )
}

export default App