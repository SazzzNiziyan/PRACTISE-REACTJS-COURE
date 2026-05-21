import { useState } from 'react'
import { decrement, increment, incrementByValue } from './redux/feature/counterSlice'
import { useDispatch, useSelector } from 'react-redux'


const App = () => {

  const dispatch = useDispatch()

  const count = useSelector((state) => state.counter.value)

  const [num, setNum] = useState()



  return (
    <div className='bg-black h-screen text-amber-100 flex flex-col items-center p-10 gap-10'>
      <h1 className='text-6xl text-center'>The Counter</h1>
      <div className='h-52.5 w-92.5 border-amber-100 border-2 text-9xl text-center pt-10' >{count}</div>
      <div className='space-x-5'>
        <button onClick={()=>{
          dispatch(increment())
        }} className='h-20 w-40 border-amber-100 border-2 rounded-xl'>Increment</button>
        <button onClick={()=>{
          dispatch(decrement())
        }} className='h-20 w-40 border-amber-100 border-2 rounded-xl'>Decrement</button>
      </div>
      <div className='space-x-5'>
        <input className='border-2 h-20 w-50 text-xl text-center rounded'
         type="Number"
         value={num}
         onChange={(e)=>{
          setNum(e.target.value)
         }}
         />
        <button onClick={()=>{

          dispatch(incrementByValue(Number(num)))
        }}
         className='h-20 w-50 capitalize border-amber-100 border-2 text-xl text-center rounded p-3'>
          increse by value
        </button>
      </div>
    </div>
  )
}

export default App