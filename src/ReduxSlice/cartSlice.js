import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        additem: (state, action) => {
            // mutating the state over here directly
            state.items.push(action.payload)
        },
        removeitem: (state, action) => {
            state.items.pop();
        },
        updateitem: (state, action) => {
            state.items = state.items.map(item => {
                if (item.id === action.payload.id) {
                    return action.payload
                }
                return item
            })
        },
        deleteallitems: (state) => {
            // RTK - either Mutate the existing state or return a new State
            state.items = []
        }

    }
})

export const { additem, removeitem, updateitem, deleteallitems } = cartSlice.actions;
export default cartSlice.reducer;