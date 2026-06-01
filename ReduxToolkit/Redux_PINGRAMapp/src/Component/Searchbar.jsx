import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setQuery } from '../redux/features/SearchSlice'

const Searchbar = () => {


  const [text, setText] = useState('')

  var dispatch = useDispatch()
  var submitHandler = (e) => {
    e.preventDefault()
    dispatch(setQuery(text))
    setText('')
  }

  return (
    <div className='w-full'>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <input
          className=' w-[90%] text-3xl p-5 text-black bg-(--c5) rounded'
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value)
          }}
          placeholder='Search anything...'
          required
        />

        <button
          className='bg-(--c4) text-3xl w-[10%] p-5 text-black rounded'
        >click me</button>
      </form>
    </div>
  )
}

export default Searchbar