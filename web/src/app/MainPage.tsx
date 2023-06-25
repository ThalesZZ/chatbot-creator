import styled from 'styled-components'
import useChatbots from '../services/api/hooks/useChatbots'
import Sidebar from './Sidebar'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setChatbots } from '../services/store/reducers/chatbots'
import ChatbotProfile from './page/profile/ChatbotProfile'

export default function MainPage() {
  const dispatch = useDispatch()
  const [chatbots] = useChatbots()

  React.useEffect(() => {
    dispatch(setChatbots(chatbots))
  }, [dispatch, chatbots])

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
