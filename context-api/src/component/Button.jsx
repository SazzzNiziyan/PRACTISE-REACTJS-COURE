import React, { useContext } from 'react'
import { themeColor } from '../Context/ThemeContext'

const Button = () => {

    const [theme, setTheme] = useContext(themeColor)

  return (
    <button onClick={()=>{
        theme === "light" ? setTheme("dark") : setTheme("light")
    }} className={`button text-2xl font-extrabold p-5 absolute top-22 right-4 bg-cyan-950 rounded-xl ${theme === "dark" ? "light" : "dark"}`}>
        Change to {theme === "dark" ? "light" : "dark"} mode
    </button>
  )
}

export default Button