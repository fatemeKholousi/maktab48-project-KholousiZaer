import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'cart',
  initialState:{
    counter:0,
    totalPrice:0,
      list:[]
    // productId:0,
    // productName:'',
    // productPrice:0,
    // productQuantityOrdered:0,  
  },

  reducers: {
      //Cart Badge
    counterAddedToCart: (state) => {
        state.counter +=1
      },
      //Add Product
    productAddedToCart: (state,action) => {
      state.list.push(action.payload);
      state.totalPrice+=+(action.payload.price) * action.payload.quantity
    },
    
      //Remove Product
    productRemovedFromCart: (state, action) => {
        const newList= state.list.filter(order => order.id !== action.payload.id)
        state.list=newList
        state.counter -=1
        state.totalPrice-=(Number(action.payload.price))*Number(action.payload.quantity)
    },
    // clear cart
    cleanedCart:(state, action)=>{
      state.list=[]
      state.counter=0
      state.totalPrice=0
    },
  }, 
})

// Action creators are generated for each case reducer function
export const {counterAddedToCart,productAddedToCart,productRemovedFromCart,cleanedCart} = counterSlice.actions

export default counterSlice.reducer