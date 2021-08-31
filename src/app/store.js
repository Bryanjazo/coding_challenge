import { configureStore } from '@reduxjs/toolkit'
import basketReducer from '../Reducer/UserReducer.js'


export default configureStore({
  reducer: {
    basket: basketReducer
  },
})
