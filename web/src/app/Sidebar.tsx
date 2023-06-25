import AddCircleIcon from '@mui/icons-material/AddCircle'
import { Link } from '@mui/material'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import type { AppStore, AppState } from '../services/store/states'
import { selectChatbot } from '../services/store/reducers/app'

export default function Sidebar() {
  const dispatch = useDispatch()
  const { chatbots } = useSelector<AppStore, AppState>(
    (state) => state.chatbots,
  )

  return (
    <Container>
      <div>
        <h2>
          chatbots <AddCircleIcon />
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
        <Link
          color="inherit"
          marginLeft={1}
          href="https://github.com/ThalesZZ"
          target="_blank"
          sx={{ ':hover': { color: 'var(--blue-sapphire)' } }}
        >
          Thales Zarzar
        </Link>
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
