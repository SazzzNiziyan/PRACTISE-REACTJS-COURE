import React, { useEffect, useState } from 'react'
import axios from 'axios';

const App = () => {

  const [userData, setUserData] = useState([])
  const [num, setNum] = useState(2)

  useEffect(() => {
    const data = async () => {
      const apiFetch = await axios.get(`https://picsum.photos/v2/list?page=${num}&limit=14`)
      setUserData(apiFetch.data)
    }
    data()

  }, [num])


  let printUserData = <h3 className='text-2xl text-gray-500 absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'>Loading...</h3>

  if (userData && userData.length > 0) {
    printUserData = userData.map((elem, idx) => {
      return <div key={idx}>
        <a href={elem.url} target="_blank"><img src={elem.download_url} alt="" className='h-60 object-cover rounded-2xl' /></a>
        <h1 className='text-lg'>{elem.author}</h1>
      </div>
    })
  }



  return (
    <div className='h-screen overflow-auto bg-black p-4'>
      <h1 className='text-9xl fixed'>{num-1}</h1>
      <div className='flex flex-wrap h-[85%] gap-5 pt-0 p-6 pb-8 justify-between'>
        {printUserData}
      </div>
      <div className='flex justify-center gap-5 pt-5 '>
        <button
          onClick={() => {
            if (num > 2) {
              setUserData([])
              setNum(num - 1)
            }
          }}
          className={"p-4 border rounded bg-amber-500 w-40 " + (num === 2 ? "opacity-50 cursor-not-allowed" : "active:scale-95")}>Prev</button>
        <h4 className='text-3xl p-4'>Page {num-1}</h4>
        <button onClick={() => {
          setUserData([])
          setNum(num + 1)
        }} className='p-4 border rounded  bg-amber-500 w-40 active:scale-95'>Next</button>
      </div>
    </div>
  )
}

export default App