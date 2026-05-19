import React, { useContext } from 'react'
import { themeColor } from "./Context/ThemeContext"
import { Route, Routes } from 'react-router-dom'
import Nav from './component/Nav'
import Home from "./Page/Home"
import About from './Page/About'
import Shop from './Page/Shop'
import Men from './Page/Men';
import Women from './Page/Women';
import Kids from './Page/Kids';
import ErrorSection7 from './Page/404'
import All from './Page/All';
import Button from './component/Button';


const App = () => {

  const [theme] = useContext(themeColor)

  return (
    <div className= {`Main h-screen w-full overflow-hidden ${theme}`}>
      <Nav />
      <Button />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/shop' element={<Shop />}>
          <Route path='men' element={<Men />} />
          <Route path='women' element={<Kids />} />
          <Route path='kids' element={<Women />} />
          <Route index element={<All />} />
        </Route>
        <Route path='*' element={<ErrorSection7 />} />
      </Routes>
    </div>
  )
}

export default App