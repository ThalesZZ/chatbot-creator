import * as Select from '@radix-ui/react-select'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { selectChatflow } from '../../../services/store/reducers/app'
import type { AppState, AppStore } from '../../../services/store/states'

export default function ProfileHeader() {
  const dispatch = useDispatch()
  const { selectedChatbot: chatbot, selectedChatflow: chatflow } = useSelector<
    AppStore,
    AppState
  >((state) => state.app)

  function onSelectChatflow(id: string) {
    dispatch(selectChatflow(id))
  }

  return (
    <Container>
      <span>{chatbot.name}</span>
      {chatbot.flows.length > 0 && (
        <span>
          <Select.Root
            defaultValue={chatflow.id}
            value={chatflow.id}
            onValueChange={onSelectChatflow}
          >
            <Select.Trigger className="SelectTrigger">
              <Select.Value />
              <Select.Icon />
            </Select.Trigger>

            <Select.Content className="SelectContent">
              <Select.Viewport>
                {chatbot.flows.map((flow) => (
                  <Select.Item
                    key={flow.id}
                    value={flow.id}
                    className="SelectItem"
                  >
                    <Select.ItemIndicator />
                    <Select.ItemText>{flow.name}</Select.ItemText>
                  </Select.Item>
                ))}
              </Select.Viewport>
            </Select.Content>
          </Select.Root>
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

  .SelectTrigger {
    background-color: transparent;
    outline: none;
    border: none;
    border-bottom: 1px solid red;
  }

  .SelectContent {
    margin-top: 20px;
    background-color: #333;
  }

  .SelectItem {
    outline: none;
    cursor: pointer;

    :hover {
      background-color: #666;
    }
  }
`
