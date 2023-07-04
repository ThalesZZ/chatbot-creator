import { PlusCircledIcon } from '@radix-ui/react-icons'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { selectChatbot } from '../services/store/reducers/app'
import type { AppState, AppStore } from '../services/store/states'

export default function Sidebar() {
  const dispatch = useDispatch()
  const { chatbots } = useSelector<AppStore, AppState>((state) => state.app)

  return (
    <Container>
      <div>
        <h2>
          chatbots <PlusCircledIcon />
        </h2>
        <Stack>
          {chatbots.map((chatbot) => (
            <Item
              key={chatbot.id}
              onClick={() => dispatch(selectChatbot([chatbot]))}
            >
              {chatbot.name}
            </Item>
          ))}
        </Stack>
      </div>

      <div id="credits">
        feito por
        <a href="https://github.com/ThalesZZ">Thales Zarzar</a>
      </div>
    </Container>
  )
}

const Container = styled.nav`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  width: 12.5%;
  min-width: 230px;
  gap: 8px;
  height: 100%;

  > div:first-child {
    flex-flow: column;

    > h2 {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px;
    }
  }

  > #credits {
    padding: 8px;
    font-size: 14px;
  }
`

const Stack = styled.div`
  display: flex;
  flex-flow: column;
  gap: 8px;
`

const Item = styled.a`
  margin: 0px 8px;
  cursor: pointer;
  padding: 4px 8px;
`
