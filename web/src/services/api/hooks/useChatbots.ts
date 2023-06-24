import { Chatbot } from '@/models/Chatbot'
import API from '..'
import useFetch, { UseFetch } from '@/services/hooks/useFetch'

export default function useChatbots(): UseFetch<Chatbot[]> {
  return useFetch([], API.chatbot.getAll)
}
