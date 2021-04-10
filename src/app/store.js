import { configureStore } from '@reduxjs/toolkit'

import DataReducer from '../reducers/dataReducer'


export default configureStore({
  reducer: {
      data: DataReducer,
  },
})
