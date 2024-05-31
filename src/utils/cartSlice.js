import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers : {
        // reducer function
        addItem: (state,action) => {
            // mutating the state over here ( directly modifying the state )
            state.items.push(action.payload)
        },
        removeItem: (state) => {
            state.items.pop();       // We can use splice also state.item.splice(action.payload) - right now i dont now how to do that
        },
        clearCart: (state) => {
            // state is a local variable here so state = [] wont work
            // console.log(current(state))  redux by default make a proxy object so to convert it into json we use current
            state.items.length = 0;

            // RTK - Either return a new state or mutate the existing state
            // return {items: []} replace the proxy object with the new {items: []}
        }
    }
})

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer; 