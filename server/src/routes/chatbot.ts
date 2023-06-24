import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'

export async function chatbotRoutes(app: FastifyInstance) {
  app.get('/chatbot', async (req, res) => {
    const chatbots = await prisma.chatbot.findMany({
      orderBy: { updatedAt: 'asc' },
    })

    return chatbots
  })
}
