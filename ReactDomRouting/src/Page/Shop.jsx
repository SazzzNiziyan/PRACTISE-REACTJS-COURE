import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Shop = () => {
    return (
        <div>
            <div className='flex justify-center gap-10 py-4'>
                <Link className='text-xl font-semibold' to='/shop'>All</Link>
                <Link className='text-xl font-semibold' to='men'>Men</Link>
                <Link className='text-xl font-semibold' to='women'>Women</Link>
                <Link className='text-xl font-semibold' to='kids'>Kids</Link>
            </div>
            <Outlet />
        </div>
    )
}

export default Shop