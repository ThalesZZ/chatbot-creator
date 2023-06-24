'use client'

import useChatbots from '@/services/api/hooks/useChatbots'
import React from 'react'
import styled from 'styled-components'

export default function Home() {
  const [chatbots] = useChatbots()

  return (
    <main style={{ height: '100vh' }}>
      <Sidebar>
        <h2>Chatbots</h2>
        <Stack>
          {chatbots.map((chatbot) => (
            <Item key={chatbot.id}>{chatbot.name}</Item>
          ))}
        </Stack>
      </Sidebar>
    </main>
  )
}

const Sidebar = styled.nav`
  flex-flow: column;
  gap: 8px;
  background-color: var(--box);
  width: 12.5%;
  min-height: 200px;
  height: 100%;

  > h2 {
    padding: 12px;
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
