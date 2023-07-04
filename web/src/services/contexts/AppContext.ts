import React from 'react'
import { Chatbot } from '../../models/Chatbot'
import { Chatflow } from '../../models/Chatflow'

export interface AppContextProps {
  chatbots: Chatbot[]
  selectedChatbot: Chatbot
  selectChatbot: (chatbot: string | Chatbot) => void

  selectedChatflow: Chatflow
  selectChatflow: (chatflow: string | Chatflow) => void
}

const AppContext = React.createContext<AppContextProps>({
  chatbots: [],
  selectedChatbot: null,
  selectChatbot: () => () => {},

  selectedChatflow: null,
  selectChatflow: () => () => {},
})

export default AppContext
