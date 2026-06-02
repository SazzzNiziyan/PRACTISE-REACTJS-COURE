import React from 'react'
import { GIF, Image, Video } from './API/mediaApi'
import Home from './Pages/Home';

const App = () => {
  return (
    <div className='bg-(--c5) select-none bg-blend-overlay  min-h-screen '>
      <Home />
    </div>
  )
}

export default App