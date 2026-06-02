import { createSlice } from "@reduxjs/toolkit";

const initial ={
        query: "",
        activeTabs: "photos",
        results: [],
        loading: false,
        error: null
    }

const searchSlice = createSlice({
    name: "search",
    initialState: initial,
    reducers: {
        setQuery(state, action) {
            state.query = action.payload
        },
        setActiveTabs(state, action) {
            state.activeTabs = action.payload
        },
        setResults(state, action) {
            state.results = action.payload
            state.loading = false
        },
        setLoadings(state) {
            state.loading = true
            state.error = null
        },
        setError(state, action) {
            state.error = action.payload
            state.loadings = false
        },

    }
})

export const {
    setQuery,
    setActiveTabs,
    setLoadings,
    setError,
    setResults,
    ClearResult
} = searchSlice.actions

export default searchSlice.reducer