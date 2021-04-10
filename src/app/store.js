import { configureStore } from '@reduxjs/toolkit'

import DataReducer from '../reducers/dataReducer'
import SelectionReducer from '../reducers/selectionReducer'


export default configureStore({
  reducer: {
      data: DataReducer,
      selection:SelectionReducer,
  },
})
