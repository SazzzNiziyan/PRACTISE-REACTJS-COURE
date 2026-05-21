import { createSlice } from "@reduxjs/toolkit";


const Counterslice = createSlice({
    name:'counter',
    initialState :{
        value:0
    },

    reducers : {
        increment:(state)=>{
            state.value+=1
        },
        decrement:(state)=>{
            state.value-=1
        },
        incrementByValue:(state,actions)=>{
            state.value+=actions.payload
        }
    }
})

export const {increment , decrement ,incrementByValue} = Counterslice.actions
 
export default Counterslice.reducer