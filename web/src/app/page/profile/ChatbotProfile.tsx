import { useSelector } from 'react-redux'
import type { AppStore, ChatbotsState } from '../../../services/store/states'
import styled from 'styled-components'
import ProfileHeader from './ProfileHeader'

export default function ChatbotProfile() {
  const { selected: chatbot } = useSelector<AppStore, ChatbotsState>(
    (state) => state.chatbots,
  )

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
