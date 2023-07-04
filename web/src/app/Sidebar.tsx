import { PlusCircledIcon } from '@radix-ui/react-icons'
import React from 'react'
import styled, { css } from 'styled-components'
import AppContext from '../services/contexts/AppContext'

export default function Sidebar() {
  const { chatbots, selectedChatbot, selectChatbot } =
    React.useContext(AppContext)

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
              onClick={() => selectChatbot(chatbot)}
              selected={chatbot === selectedChatbot}
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
  background-color: var(--card);
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

const Item = styled.a<{ selected: boolean }>`
  ${({ selected }) => css`
    margin: 0px 8px;
    cursor: pointer;
    padding: 4px 8px;
    background-color: ${selected ? 'var(--highlight)' : 'transparent'};
  `}
`
