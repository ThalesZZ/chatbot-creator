import type { Chatbot } from '../../models/Chatbot'
import { Chatflow } from '../../models/Chatflow'

interface AppState {
  chatbots: Chatbot[]
  selectedChatbot: Chatbot
  selectedChatflow: Chatflow
}

interface AppStore {
  chatbots: AppState
}
