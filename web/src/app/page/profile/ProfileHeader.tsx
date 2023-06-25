import { useSelector } from 'react-redux'
import type { AppStore, ChatbotsState } from '../../../services/store/states'
import styled from 'styled-components'

export default function ProfileHeader() {
  const { selected: chatbot } = useSelector<AppStore, ChatbotsState>(
    (state) => state.chatbots,
  )
  return <Container>{chatbot?.name}</Container>
}

const Container = styled.header`
  width: 100%;
  padding: 1em 2em;
`
