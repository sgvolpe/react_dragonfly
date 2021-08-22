import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    notification: null,
    status: null

};


const uiSlice = createSlice({
    name: 'ui',
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

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;