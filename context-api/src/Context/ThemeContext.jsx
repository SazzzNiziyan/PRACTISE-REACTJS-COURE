import React, { createContext, useState } from 'react'
import App from '../App'

// eslint-disable-next-line react-refresh/only-export-components
export const themeColor = createContext()

const ThemeContext = (props) => {

    const [theme, setTheme] = useState("light")

    return (
        <themeColor.Provider value={[theme, setTheme]}>
            {props.children}
        </themeColor.Provider>
    )
}

export default ThemeContext