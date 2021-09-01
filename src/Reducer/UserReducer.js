import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


export const setUserStatus = createAsyncThunk(
  'basket/setUserStatus',
  async() => {
      const response = await fetch(`http://localHost:3000/payers`)
        const data = await response.json()
        return data
  }
)

export const updateUser = createAsyncThunk(
  'basket/updateUser',
  async() => {
      const response = await fetch(`http://localHost:3000/payers`)
        const data = await response.json()
        return data
  }
)


const basketStore = createSlice({
  name: "basket",
  initialState:{
    userDetails: []
  },
  reducers:{
  addToBasket: (state, action) => {
    state.basket.push(action.payload)
  },
},
extraReducers: (builder) => {
  builder.addCase(setUserStatus.fulfilled, (state, action) =>{
    state.userDetails = action.payload
  })
}
})

export const {} = basketStore.actions

export default basketStore.reducer
