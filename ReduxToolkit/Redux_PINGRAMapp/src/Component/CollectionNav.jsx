import React from 'react'
import { Link } from 'react-router-dom';

const CollectionNav = () => {

  return (
    <div className='flex justify-between px-2 w-full bg-(--c3) border-14 border-(--c3)'>
      <video autoPlay loop muted className='w-50 h-20'  src="/2.mp4"></video>
      <Link to={'/'}><button
        className='bg-(--c5) text-3xl p-5 w-60 text-black'
      >Search</button></Link>

    </div>
  )
}

export default CollectionNav