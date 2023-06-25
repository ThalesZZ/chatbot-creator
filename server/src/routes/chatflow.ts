import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'
import { z } from 'zod'

export async function chatflowRoutes(app: FastifyInstance) {
  app.get('/:chatbotId/chatflow', async (req, res) => {
    const paramsSchema = z.object({ chatbotId: z.string().uuid() })
    const { chatbotId } = paramsSchema.parse(req.params)

    const chatflows = await prisma.chatflow.findMany({
      where: { chatbotId },
      orderBy: { updatedAt: 'desc' },
    })

    return chatflows
  })
}
