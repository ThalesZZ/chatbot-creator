'use client'

import { Chatbot } from '@/models/Chatbot'
import API from '@/services/api'
import React from 'react'

export default function Home() {
  const [chatbots, setChatbots] = React.useState<Chatbot[]>([])

  React.useEffect(() => {
    API.chatbot.getAll().then(setChatbots)
  }, [])

  return <main>{JSON.stringify(chatbots)}</main>
}
