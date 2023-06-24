import { Chatbot, ChatbotDTO } from '@/models/Chatbot'
import { api } from '.'

export class ChatbotApi {
  static INSTANCE = new ChatbotApi()

  private static URL = '/chatbot'

  async getAll(): Promise<Chatbot[]> {
    return api
      .get<ChatbotDTO[]>(ChatbotApi.URL)
      .then(({ data }) => Chatbot.fromArrayDTO(data))
  }
}
