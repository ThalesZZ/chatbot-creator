import { configureStore } from '@reduxjs/toolkit'
import chatbotsReducer from './reducers/chatbots'

const store = configureStore({
  reducer: {
    chatbots: chatbotsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store