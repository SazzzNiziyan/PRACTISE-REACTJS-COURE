import { createSlice } from "@reduxjs/toolkit";
import Collectioncard from './../../Component/CollectionCard';

const initialState = {
    items : JSON.parse(localStorage.getItem('collection')) || []
}

const collectionSlice = createSlice({
    name : "collection",
    initialState,
    reducers :{
        addToCollection:(state,action)=>{
            const alreadyExists = state.items.find(item=>item.id===action.payload.id)
            if(!alreadyExists){
                state.items.push(action.payload)
                localStorage.setItem('collection', JSON.stringify(state.items))
            }
        },
        removeCollection:(state,action)=>{
            
            state.items = state.items.filter(item=>item.id !== action.payload)
            localStorage.setItem('collection',JSON.stringify(state.items))
        },
        ClearResult:(state)=>{
            state.items = []
            localStorage.removeItem('collection')
        }
    }
})

export const {
    addToCollection,
    removeCollection,
    ClearResult
}= collectionSlice.actions

export default collectionSlice.reducer