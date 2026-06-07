import React from 'react'
import Navbar from '../Component/Navbar'
import ResultGrid from './../Component/ResultGrid';
import { useSelector } from 'react-redux';
import Tabs from '../Component/Tabs';
import { useDispatch } from 'react-redux';
import { ClearResult } from '../redux/features/CollectionSlice';
import Collectioncard from '../Component/CollectionCard';
import CollectionNav from '../Component/CollectionNav';


const Collectionpage = () => {

    const collection = useSelector((state) => state.collection.items)

    const dispatch = useDispatch()

    const clearAll = () => {
        dispatch(ClearResult())
    }

    return (
        <div className='relative pb-3'>
            <Navbar />
            <CollectionNav />
            {collection.length !== 0 ? <div className='flex justify-between items-center p-4 '>
                <h1 className='text-6xl text-(--c3)'>YOUR COLLECTION</h1>
                <button className='px-16 text-(--c5) py-6 text-4xl bg-(--c2) hover:bg-(--c1)' onClick={() => {
                    clearAll()
                }}>clearAll</button>
                </div>:  <h1 className='text-6xl p-4 text-(--c3)'>YOUR COLLECTION IS EMPTY JII!!!</h1> }
                <div className='flex flex-wrap gap-4 justify-intial pl-5.5'>{collection.map((item, idx) => {
                    return <Collectioncard key={idx} item={item} />
                })}</div>
            </div>
    )
}

export default Collectionpage