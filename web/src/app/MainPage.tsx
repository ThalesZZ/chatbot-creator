import styled from 'styled-components'
import Sidebar from './Sidebar'
import ChatbotProfile from './page/profile/ChatbotProfile'

export default function MainPage() {
  return (
    <Container>
      <Sidebar />
      <ChatbotProfile />
    </Container>
  )
}

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
`
