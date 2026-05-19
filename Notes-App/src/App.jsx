import React, { useState } from 'react'
import Notecard from './component/Notecard'

const App = () => {

  const [title, setTitle] = useState('')

  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const HandleClick = (e) => {
    e.preventDefault();
    setTask(prev => [...prev,{title,details}])
    setTitle('')
    setDetails('')
  }

  const onremove = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1)
    setTask(copyTask)
  }

  return (
    <div className='flex h-screen'>


      <div className='bg-black p-8 w-1/2 text-white'>
        <h1 className='text-center pb-20 text-4xl font-extralight font-(family-name:--font-heading)'> Add Notes </h1>
        <form onSubmit={(e) => HandleClick(e)}>
          <input className='text-2xl mb-10 border border-gray-400 w-full h-20 p-2 capitalize'
            type="text"
            placeholder='Topic name'
            value={title}
            onChange={(e) => {
              setTitle(e.target.value)
            }}required
          />
          <textarea className='text-2xl mb-10 border border-gray-400 w-full h-40 p-4 capitalize'
            type='text'
            placeholder='Details'
            value={details}
            onChange={(e) => {
              setDetails(e.target.value)
            }}required
          />
          <button className='text-2xl  active:scale-95 mb-10 border border-gray-400 rounded-xl p-4' >Add Notes</button>
        </form></div>


      <div className='bg-yellow-300 p-8 overflow-auto scrollbar-hidden w-1/2 text-red-800'>
        <h1 className='text-center pb-20 text-4xl font-extralight font-(family-name:--font-heading)'>Recent Notes </h1>
        <div className=' flex flex-wrap gap-10'>
          {task.map((data, idx) => (
            <Notecard key={idx} title={data.title} details={data.details} /*cardData={data}*/ onDelete={() => { onremove (idx) }} />
          ))
          }
        </div>
      </div>


    </div>
  )
}

export default App