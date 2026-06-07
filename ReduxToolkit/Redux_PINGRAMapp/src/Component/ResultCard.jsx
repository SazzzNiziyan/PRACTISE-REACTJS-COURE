import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCollection ,addToast } from '../redux/features/CollectionSlice'


const ResultCard = ({ item }) => {
  
  const dispatch = useDispatch()

  const addCollection = (item) => {
    dispatch(addToCollection(item))
  }

  return (
    <div className='relative h-80 w-80'>
      <a href={item.url} target='_blank'>
        {item.type === 'photo' ? <img className=' h-full w-full object-cover' src={item.src} alt="" /> : null}
        {item.type === 'video' ? <video autoPlay muted loop className=' h-full w-full object-cover' src={item.src} /> : null}
        {item.type === 'gif' ? <img className=' h-full w-full object-cover' src={item.src} alt="" /> : null}
      </a>
      <button onClick={() => {
        addCollection(item)
        dispatch(addToast())
      }} className='absolute cursor-pointer top-2 right-2 bg-(--c4) px-2 py-1 hover:bg-(--c3) active:scale-95'>SAVE</button>
      <p className='absolute h-14 overflow-hidden bottom-4 left-0 right-4 bg-(--c4)/70 px-2 py-1'>{item.title}</p>
    </div>
  )
}

export default ResultCard