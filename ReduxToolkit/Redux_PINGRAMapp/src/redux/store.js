import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/SearchSlice"
import collectionSlice from "./features/CollectionSlice"

export const store = configureStore({
    reducer: {
        search: searchReducer,
        collection: collectionSlice
    },
});