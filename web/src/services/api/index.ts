import axios from 'axios'
import { ChatbotApi } from './ChatbotAPI'

export const api = axios.create({ baseURL: 'http://localhost:3333' })

class ApiLobby {
  readonly chatbot: ChatbotApi

  constructor() {
    this.chatbot = ChatbotApi.INSTANCE
  }
}

const API = new ApiLobby()
export default API
