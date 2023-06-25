import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { Chatbot } from '../../../models/Chatbot'
import { AppState } from '../states'
import { Chatflow } from '../../../models/Chatflow'

const initialState: AppState = {
  chatbots: [],
  selectedChatbot: null,
  selectedChatflow: null,
}

const chatbotsSlice = createSlice({
  name: 'chatbots',
  initialState,
  reducers: {
    setChatbots: (state, action: PayloadAction<Chatbot[]>) => {
      state.chatbots = action.payload
    },
    selectChatbot: (state, action: PayloadAction<[Chatbot, Chatflow?]>) => {
      const [bot, flow] = action.payload
      state.selectedChatbot = bot
      state.selectedChatflow = flow || bot.flows[0] || null
    },
    selectChatflow: (state, action: PayloadAction<string | Chatflow>) => {
      const flow = state.selectedChatbot.getChatflow(
        action.payload instanceof Chatflow ? action.payload.id : action.payload,
      )
      state.selectedChatflow = flow
    },
  },
})

export const { setChatbots, selectChatbot, selectChatflow } =
  chatbotsSlice.actions
export default chatbotsSlice.reducer
