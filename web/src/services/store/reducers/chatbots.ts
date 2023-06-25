import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { Chatbot } from '../../../models/Chatbot'
import { ChatbotsState } from '../states'

const initialState: ChatbotsState = {
  chatbots: [],
  selected: null,
}

const chatbotsSlice = createSlice({
  name: 'chatbots',
  initialState,
  reducers: {
    setChatbots: (state, action: PayloadAction<Chatbot[]>) => {
      state.chatbots = action.payload
    },
    select: (state, action: PayloadAction<Chatbot>) => {
      state.selected = action.payload
    },
  },
})

export const { setChatbots } = chatbotsSlice.actions
export default chatbotsSlice.reducer
