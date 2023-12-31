import API from '..'
import type { Chatbot } from '../../../models/Chatbot'
import useFetch, { UseFetch } from '../../hooks/useFetch'

export default function useChatbots(): UseFetch<Chatbot[]> {
  return useFetch([], API.chatbot.getAll)
}
