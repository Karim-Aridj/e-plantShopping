import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            const { name, image, cost } = action.payload;
            // Check if the item already exists in the cart
            const existingItem = state.items.find(item => item.name === name);
            if (existingItem) {
                // If it exists, increase the quantity
                existingItem.quantity++;
            } else {
                // If it doesn't exist, add it with quantity 1
                state.items.push({ name, image, cost, quantity: 1 });
            }
        },
        removeItem: (state, action) => {
            // Remove the item based on its name
            state.items = state.items.filter(item => item.name !== action.payload);
        },
        updateQuantity: (state, action) => {
            const { name, quantity } = action.payload;
            // Find the item to update
            const itemToUpdate = state.items.find(item => item.name === name);
            if (itemToUpdate) {
                // Update the quantity
                itemToUpdate.quantity = quantity;
            }
        }
    },
});

// Export the action creators so we can dispatch them from components
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

// Export the reducer as default so it can be used in store.js
export default cartSlice.reducer;