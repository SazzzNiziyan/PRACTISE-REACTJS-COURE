import React from 'react'
import { Link } from 'react-router'


const navbar = () => {
  return (
    <div className='bg-cyan-800 h-20 text-4xl  flex  justify-between items-center p-4 '>
      <div>SazzzNiziyan</div>
      <div>
        <Link className='p-4' to='/home'>Home</Link>
        <Link className='p-4' to='/shop'>Shop</Link>
        <Link className='p-4' to='/About'>About</Link></div>
    </div>
  )
}

export default navbar