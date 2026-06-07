import { createSlice } from "@reduxjs/toolkit";
import Collectioncard from './../../Component/CollectionCard';
import { toast } from "react-toastify";
import { Bounce } from 'react-toastify'

const initialState = {
    items: JSON.parse(localStorage.getItem('collection')) || []
}

const collectionSlice = createSlice({
    name: "collection",
    initialState,
    reducers: {
        addToCollection: (state, action) => {
            const alreadyExists = state.items.find(item => item.id === action.payload.id)
            if (!alreadyExists) {
                state.items.push(action.payload)
                localStorage.setItem('collection', JSON.stringify(state.items))
            }
        },
        removeCollection: (state, action) => {

            state.items = state.items.filter(item => item.id !== action.payload)
            localStorage.setItem('collection', JSON.stringify(state.items))
        },
        ClearResult: (state) => {
            state.items = []
            localStorage.removeItem('collection')
        },
        addToast: () => {
            toast.success('Added To Collection', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        },
        removeToast: () => {
            toast.error('Delete From Collection', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }

    }
})

export const {
    addToCollection,
    removeCollection,
    ClearResult,
    removeToast,
    addToast
} = collectionSlice.actions

export default collectionSlice.reducer