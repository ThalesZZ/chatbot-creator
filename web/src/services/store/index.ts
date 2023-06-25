import { configureStore } from '@reduxjs/toolkit'
import chatbotsReducer from './reducers/chatbots'

const store = configureStore({
  reducer: {
    chatbots: chatbotsReducer,
  },
})

export default store
