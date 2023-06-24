'use client'

import useChatbots from '@/services/api/hooks/useChatbots'
import React from 'react'

export default function Home() {
  const [chatbots] = useChatbots()

  return <main>{JSON.stringify(chatbots)}</main>
}
