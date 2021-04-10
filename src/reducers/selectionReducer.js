import {createSlice} from '@reduxjs/toolkit'



const initialState = {
    selection:"AAPL"
}



const selectionSlice = createSlice({
    name:"selection",
    initialState,
    reducers:{
        changeSelection(state,action){
            const {selection} = action.payload
            state.selection = selection
        }


    }
})

export const {changeSelection} = selectionSlice.actions;

export default selectionSlice.reducer;
