import React from 'react'
import { GIF, Image, Video } from './API/mediaApi'
import Searchbar from './Component/Searchbar';

const App = () => {
  return (
    <div className=' bg-white min-h-screen'>
      <Searchbar />
      <button onClick={async () => {
        const data = await Image("cat");
        console.log(data.results)
      }} className='h-20 w-50 text-2xl bg-red-500 rounded p-2 m-10 active:scale-95 transition'>Press Me</button>

      <button onClick={async () => {
        const data = await Video("cat");
        console.log(data.videos)
      }} className='h-20 w-50 text-2xl bg-red-500 rounded p-2 m-10 active:scale-95 transition'>Press Me</button>

      <button onClick={async () => {
        const data = await GIF("cat");
        console.log(data.data)
      }} className='h-20 w-50 text-2xl bg-red-500 rounded p-2 m-10 active:scale-95 transition'>Press Me</button>


    </div>
  )
}

export default App