import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setQuery } from '../redux/features/SearchSlice'

const Searchbar = () => {


  const [text, setText] = useState('')

  var dispatch = useDispatch()
  var submitHandler = (e) => {
    e.preventDefault()
    dispatch(setQuery(text)) 
  }

  return (
    <div className='w-full border-14 border-(--c3)'>
      <form onSubmit={(e) => {
        submitHandler(e)
        
      }}>
        <input
          className='w-[90%] outline-0 text-3xl text-(--c1) p-5 uppercase bg-(--c5)'
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value)
          }}
          placeholder='Search anything...'
          required
        />

        <button
          className='bg-(--c4) text-3xl w-[10%] p-5 text-black'
        >Touch Me</button>
      </form>
    </div>
  )
}

export default Searchbar