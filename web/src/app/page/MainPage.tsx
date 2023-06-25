import styled from 'styled-components'
import useChatbots from '../../services/api/hooks/useChatbots'
import Sidebar from './Sidebar'

export default function MainPage() {
  useChatbots()

  return (
    <Container>
      <Sidebar />
    </Container>
  )
}

const Container = styled.main`
  width: 100vw;
  height: 100vh;
`
