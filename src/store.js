import { configureStore } from '@reduxjs/toolkit'
import prity from './Slices/Redux'

export default configureStore({
  reducer: {
    MyEx: prity,
  },
})
