import { useSelector } from 'react-redux'
import type { AppStore, AppState } from '../../../services/store/states'
import styled from 'styled-components'
import ProfileHeader from './ProfileHeader'
import { ReactFlowProvider } from 'reactflow'
import ChatflowEditor from './ChatflowEditor'

export default function ChatbotProfile() {
  const { selectedChatbot: chatbot, selectedChatflow: chatflow } = useSelector<
    AppStore,
    AppState
  >((state) => state.app)

  if (!chatbot) return

  return (
    <Container>
      <ProfileHeader />
      {chatflow && (
        <ReactFlowProvider>
          <ChatflowEditor />
        </ReactFlowProvider>
      )}
    </Container>
  )
}

const Container = styled.section`
  width: 100%;
  height: 100%;
`
