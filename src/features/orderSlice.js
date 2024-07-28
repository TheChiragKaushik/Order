import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    orders: []
};

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addOrder: (state, action) => {
            const order = {
                id: nanoid(),
                product: action.payload.product,
                quantity: action.payload.quantity,
            };
            state.orders.push(order);
        },
        updateOrder: (state, action) => {
            state.orders = state.orders.map((order) => {
                if (order.id === action.payload.id) {
                    return { ...order, product: action.payload.product, quantity: action.payload.quantity };
                }
                return order;
            });
        },
        resetOrder: (state) => {
            state.orders = []; 
        }
    },
});

export const { addOrder, updateOrder, resetOrder } = orderSlice.actions;

export default orderSlice.reducer;
