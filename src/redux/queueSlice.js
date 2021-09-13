import { createSlice } from '@reduxjs/toolkit'
export const queueSlice = createSlice({  
    name: 'queue',  
    initialState: {    value: [],  },  
    reducers: { 
        queueMessage: (state, action) => {   state.value = [...state.value,action.payload]   },  
        popMessage: (state, action) => {
            state.value = [...state.value].filter(obj=> obj.id!=action.payload.id)
        },  
    },
})
        
// Action creators are generated for each case reducer function
export const { queueMessage, popMessage } = queueSlice.actions
export default queueSlice.reducer