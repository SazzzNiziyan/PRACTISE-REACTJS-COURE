import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { themeColor } from '../Context/ThemeContext'
import { TbBulbFilled } from "react-icons/tb";
import { BiSolidBulb } from "react-icons/bi";


const Nav2 = () => {

    const [theme] = useContext(themeColor)

    return (
        <div>
            <div className='font-bold text-2xl uppercase flex '>
                <Link className='pr-4 active:scale-95' to='/'>Home</Link>
                <Link className='pr-4 active:scale-95' to='/shop'>Shop</Link>
                <Link className='pr-4 active:scale-95' to='/About'>About</Link>
                <h1 className='border-2 p-1 px-2 pt-0 rounded flex text-shadow-none' >{theme}{theme==="light"?<TbBulbFilled className='mt-1'/>:  <BiSolidBulb className='mt-1'/>} </h1>
            </div>
        </div>
    )
}

export default Nav2