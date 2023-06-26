import { configureStore } from '@reduxjs/toolkit'
import chatbotsReducer from './reducers/app'

const store = configureStore({
  reducer: {
    app: chatbotsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store
