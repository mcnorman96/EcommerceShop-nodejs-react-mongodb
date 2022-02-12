import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart", 
  initialState: {
    products: [], 
    quantity: 0, 
    total: 0, 
  },
  reducers: {
    addProduct: (state, action) => {
      const existingProduct = state.products.find(product => product._id === action.payload._id)
      if (existingProduct) {
        state.quantity += 1;
        existingProduct.quantity += 1;
        state.total += action.payload.price * action.payload.quantity;
      } else {
        state.quantity += 1;
        state.products.push(action.payload);
        state.total += action.payload.price * action.payload.quantity;
      }
    }
  }
})

export const { addProduct } = cartSlice.actions; 
export default cartSlice.reducer;