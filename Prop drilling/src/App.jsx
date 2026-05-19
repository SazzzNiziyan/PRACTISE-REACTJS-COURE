import React from 'react'
import Card from './component/Card';

const App = () => {
  return (
    <div>
      <div className="parent">
      <Card user='SAJAL RAJ' age={33} img='https://images.unsplash.com/photo-1774612614467-e70c1fe593cc?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      <Card user='RAHA RAJ' age={33} img='https://images.unsplash.com/photo-1656645123173-f98a07459f49?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      </div>
    </div>
  )
}

export default App