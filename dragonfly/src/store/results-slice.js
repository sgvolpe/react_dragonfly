import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    resultsCount: 0,
    

};


const resultsSlice = createSlice({
    name: 'results',
    initialState: initialState,
    reducers: {
        showNotification(state, action){
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message,
            }
        },
        clearNotification(state){
            state.notification = null
        }
        ,
        setStatus(state, action){
            state.status = action.payload.status
        }

    },

});

export const resultsActions = resultsSlice.actions;
export default resultsSlice.reducer;