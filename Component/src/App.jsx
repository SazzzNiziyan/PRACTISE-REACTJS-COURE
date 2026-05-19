import React from 'react'
import navbar from './Component/navbar';

const App = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold underline text-center mt-4'>Hello world!</h1>
      {navbar()}
    </div>
  )
}

export default App