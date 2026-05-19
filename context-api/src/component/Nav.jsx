import React, { useContext } from 'react'
import Nav2 from './Nav2';
import { themeColor } from '../Context/ThemeContext';


const Nav = () => {

    const [theme] = useContext(themeColor)

    return (
        <div className={`Navbar flex justify-between ${theme}`}>
            <div className='First'>okay Okay</div>
            <Nav2 />
        </div>
    )
}

export default Nav