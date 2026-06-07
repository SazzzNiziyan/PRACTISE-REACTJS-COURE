import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs, setPage, setResults } from '../redux/features/SearchSlice'

const Tabs = () => {

  const arr = ['photos', 'videos', 'GIF']

  const dispatch = useDispatch()
  const activeTab = useSelector((state) => state.search.activeTabs)

  return (
    <div className='flex justify-center'>
      {arr.map((elem, idx) => {
        return <button onClick={() => {
          if (activeTab === elem) return;

          dispatch(setResults([]));
          dispatch(setPage(1));
          dispatch(setActiveTabs(elem));
        }}
          className={`h-20 w-50 uppercase m-2 self-align-center ${activeTab === elem ? 'text-(--c2)' : 'text-(--c1)'} text-5xl`} key={idx}>{elem}</button>
      })}
    </div>
  )
}

export default Tabs