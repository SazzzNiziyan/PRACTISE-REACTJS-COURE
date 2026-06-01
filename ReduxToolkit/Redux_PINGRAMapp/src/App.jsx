import React from 'react'
import { GIF, Image, Video } from './API/mediaApi'
import Home from './Pages/Home';

const App = () => {
  return (
    <div className='bg-(--c5) select-none bg-blend-overlay  min-h-screen'>
      {/* <button onClick={async()=>{
        await Video('CAT')}}>daabana</button> */}
      <Home />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/30 to-transparent"></div>
    </div>
  )
}

export default App