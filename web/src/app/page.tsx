'use client'

import useChatbots from '@/services/api/hooks/useChatbots'
import { Paper, Stack } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles'

export default function Home() {
  const [chatbots] = useChatbots()

  return (
    <main>
      <ChatbotSideList>
        {chatbots.map((chatbot) => (
          <Item key={chatbot.id}>{chatbot.name}</Item>
        ))}
      </ChatbotSideList>
    </main>
  )
}

const ChatbotSideList = styled(Stack)(() => ({
  backgroundColor: '#00cc80',
  gap: 8,
  width: '12.5vw',
}))

const Item = styled(Paper)(() => ({
  backgroundColor: 'transparent',
  ':hover': {
    backgroundColor: 'red',
  },
}))
