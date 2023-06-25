import { Chatbot } from '../../models/Chatbot'

interface ChatbotsState {
  chatbots: Chatbot[]
  selected: Chatbot
}

interface AppStore {
  chatbots: ChatbotsState
}
