import React from 'react'
import { GIF, Image, Video } from './API/mediaApi'

const App = () => {




  return (
    <div>
      <button onClick={async () => {
        const data = await Image("cat");
        console.log(data.results)
      }} className='h-40 w-80 text-5xl bg-red-500 m-10 active:scale-95 transition'>Press Me</button>

      <button onClick={async () => {
        const data = await Video("cat");
        console.log(data.videos)
      }} className='h-40 w-80 text-5xl bg-red-500 m-10 active:scale-95 transition'>Press Me</button>

      <button onClick={async () => {
        const data = await GIF("cat");
        console.log(data.data)
      }} className='h-40 w-80 text-5xl bg-red-500 m-10 active:scale-95 transition'>Press Me</button>

    </div>
  )
}

export default App