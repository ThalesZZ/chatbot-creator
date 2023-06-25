import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'
import { Chatflow } from '@prisma/client'

// TODO move it to a class or utils
const mostRecentChatbotUpdate = (flows: Chatflow[]) =>
  flows.reduce((dt, flow) => {
    if (flow.updatedAt.getTime() > dt.getTime()) return flow.updatedAt

    return dt
  }, new Date(0))

export async function chatbotRoutes(app: FastifyInstance) {
  app.get('/chatbot', async (req, res) => {
    const chatbots = await prisma.chatbot.findMany({ include: { flows: true } })
    chatbots.sort((el1, el2) => {
      const mostRecentUpdateOfEl1 = mostRecentChatbotUpdate(el1.flows)
      const mostRecentUpdateOfEl2 = mostRecentChatbotUpdate(el2.flows)

      return mostRecentUpdateOfEl2.getTime() - mostRecentUpdateOfEl1.getTime()
    })

    return chatbots
  })
}
