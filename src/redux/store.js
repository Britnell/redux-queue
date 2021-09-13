import { configureStore } from '@reduxjs/toolkit'
import queueReducer from './queueSlice'

export default configureStore({  
    reducer: {
        queue: queueReducer,
    },
})