import React from 'react'

const ResultCard = ({item}) => {
  return (
    <div>
      <img
      className='h-60 w-60 bg-cover' src={item.src} alt="" />
    </div>
  )
}

export default ResultCard