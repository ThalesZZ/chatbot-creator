import AddCircleIcon from '@mui/icons-material/AddCircle'
import { Link } from '@mui/material'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import type { AppStore, ChatbotsState } from '../../services/store/states'

export default function Sidebar() {
  const { chatbots } = useSelector<AppStore, ChatbotsState>(
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
            <Item key={chatbot.id}>{chatbot.name}</Item>
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
  flex-flow: column;
  justify-content: space-between;
  background-color: var(--box);
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
    background-color: var(--box-border);
    border-top: 2px solid var(--bg-color);
    font-size: 14px;
  }
`

const Stack = styled.div`
  flex-flow: column;
  gap: 8px;
`

const Item = styled.a`
  background-color: var(--inner-box);
  margin: 0px 8px;
  cursor: pointer;
  color: var(--bg-color);
  padding: 4px 8px;
`
