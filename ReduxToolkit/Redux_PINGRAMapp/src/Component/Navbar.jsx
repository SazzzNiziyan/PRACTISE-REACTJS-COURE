import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
<div className='w-full bg-(--c3)'>
        <h1 className='text-7xl p-2 tracking-widest text-(--c5) text-center font-[Cutout4] border-b-0 border-14 border-(--c5)'><Link to='/'>PINGRAM</Link></h1>
            <Link className='absolute text-4xl uppercase text-(--c5) px-4 py-10 top-2 right-2' to='/collection'>CollectionPage</Link>
    </div>  )
}

export default Navbar