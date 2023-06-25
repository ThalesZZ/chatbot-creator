import { useSelector } from 'react-redux'
import type { AppStore, AppState } from '../../../services/store/states'
import styled from 'styled-components'
import ProfileHeader from './ProfileHeader'

export default function ChatbotProfile() {
  const { selectedChatbot: chatbot } = useSelector<AppStore, AppState>(
    (state) => state.chatbots,
  )

  if (!chatbot) return

  return (
    <Container>
      <ProfileHeader />
    </Container>
  )
}

const Container = styled.section`
  width: 100%;
  height: 100%;
`
