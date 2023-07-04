import React from 'react'
import { ReactFlowProvider } from 'reactflow'
import styled from 'styled-components'
import AppContext from '../../../services/contexts/AppContext'
import ChatflowEditor from './ChatflowEditor'
import ProfileHeader from './ProfileHeader'

export default function ChatbotProfile() {
  const { selectedChatbot: chatbot, selectedChatflow: chatflow } =
    React.useContext(AppContext)

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
