import React from 'react'
import { Chatbot } from '../models/Chatbot'
import { Chatflow } from '../models/Chatflow'
import ApiHooks from '../services/api/hooks'
import AppContext, { AppContextProps } from '../services/contexts/AppContext'
import MainPage from './MainPage'
import './globals.css'

export default function App() {
  const [chatbots] = ApiHooks.useChatbots()
  const [selectedChatbot, setSelectedChatbot] = React.useState<Chatbot>()

  const [selectedChatflow, setSelectedChatflow] = React.useState<Chatflow>()

  const selectChatbot = React.useCallback(
    (param: string | Chatbot) => {
      const chatbot =
        param instanceof Chatbot
          ? param
          : chatbots.find((bot) => bot.id === param)

      if (chatbot === selectedChatbot) return

      setSelectedChatbot(() => chatbot)
      setSelectedChatflow(() => chatbot.flows[0])
    },
    [chatbots, selectedChatbot],
  )

  const selectChatflow = React.useCallback(
    (param: string | Chatflow) => {
      const chatflow =
        param instanceof Chatflow
          ? param
          : selectedChatbot.flows.find((flow) => flow.id === param)

      if (chatflow === selectedChatflow) return

      setSelectedChatflow(() => chatflow)
    },
    [selectedChatbot, selectedChatflow],
  )

  const appContext = React.useMemo<AppContextProps>(
    () => ({
      chatbots,
      selectedChatbot,
      selectChatbot,
      selectedChatflow,
      selectChatflow,
    }),
    [
      chatbots,
      selectChatbot,
      selectChatflow,
      selectedChatbot,
      selectedChatflow,
    ],
  )

  return (
    <AppContext.Provider value={appContext}>
      <MainPage />
    </AppContext.Provider>
  )
}
