import { useSelector, useDispatch } from 'react-redux'
import type { AppStore, AppState } from '../../../services/store/states'
import styled from 'styled-components'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { selectChatflow } from '../../../services/store/reducers/app'

export default function ProfileHeader() {
  const dispatch = useDispatch()
  const { selectedChatbot: chatbot, selectedChatflow: chatflow } = useSelector<
    AppStore,
    AppState
  >((state) => state.chatbots)

  return (
    <Container>
      <span>{chatbot.name}</span>
      {chatbot.flows.length > 0 && (
        <span>
          <Select
            value={chatflow.id}
            onChange={(evt) => dispatch(selectChatflow(evt.target.value))}
          >
            {chatbot.flows.map((flow) => (
              <MenuItem key={flow.id} value={flow.id}>
                {flow.name}
              </MenuItem>
            ))}
          </Select>
        </span>
      )}
    </Container>
  )
}

const Container = styled.header`
  width: 100%;
  padding: 1em 2em;
  display: flex;
  gap: 20px;
`
