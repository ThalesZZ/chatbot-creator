import { api } from '.'
import { Chatbot, ChatbotDTO } from '../../models/Chatbot'

export class ChatbotApi {
  static INSTANCE = new ChatbotApi()

  private static URL = '/chatbot'

  async getAll(): Promise<Chatbot[]> {
    return api
      .get<ChatbotDTO[]>(ChatbotApi.URL)
      .then(({ data }) => Chatbot.fromArrayDTO(data))
  }
}
