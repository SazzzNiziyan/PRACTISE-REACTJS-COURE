import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCollection } from '../redux/features/CollectionSlice'

const Collectioncard = ({item}) => {

  const dispatch = useDispatch()

  const removefromCollection = (item) => {
    dispatch(removeCollection(item.id))
  }

  return (
    <div>
          <div className= 'relative h-80 w-80'>
      <a href={item.url} target='_blank'>
        {item.type === 'photo' ? <img className=' h-full w-full object-cover' src={item.src} alt="" /> : null}
        {item.type === 'video' ? <video autoPlay muted loop className=' h-full w-full object-cover'  src={item.src} /> : null}
        {item.type === 'gif' ? <img className=' h-full w-full object-cover' src={item.src} alt="" /> : null}
      </a>
      <button onClick={()=>{
        removefromCollection(item)
      }} className='absolute top-2 right-2 bg-(--c1) px-2 py-1 active:scale-95'>remove</button>
      <p className='absolute overflow-hidden top-0 left-0 right-4 bg-(--c3) w-14 px-2 py-1'>{item.type}</p>
      <p className='absolute h-14 overflow-hidden bottom-4 left-0 right-4 bg-(--c4)/70 px-2 py-1'>{item.title}</p>
    </div>
    </div>
  )
}

export default Collectioncard