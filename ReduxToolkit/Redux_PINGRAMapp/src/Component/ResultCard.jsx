import React from 'react'

const ResultCard = ({ item }) => {
  return (
    <div className= 'relative h-80 w-80'>
      <a href={item.url} target='_blank'>
        {item.type === 'photo' ? <img className=' h-full w-full object-cover' src={item.src} alt="" /> : null}
        {item.type === 'video' ? <video autoPlay muted loop className=' h-full w-full object-cover'  src={item.src} /> : null}
        {item.type === 'gif' ? <img className=' h-full w-full object-cover' src={item.src} alt="" /> : null}
      </a>
      <button className='absolute top-2 right-2 bg-(--c4) px-2 py-1'>SAVE</button>
      <p className='absolute h-14 overflow-hidden bottom-4 left-0 right-4 bg-(--c4)/70 px-2 py-1'>{item.title}</p>
    </div>
  )
}

export default ResultCard