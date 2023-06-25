import fastify from 'fastify'
import cors from '@fastify/cors'
import { chatbotRoutes } from './routes/chatbot'
import { chatflowRoutes } from './routes/chatflow'

const port = 3333

const app = fastify()
app.register(cors)
app.register(chatbotRoutes)
app.register(chatflowRoutes)

app.listen({ port }).then(() => {
  console.log(`Server running on port ${port}`)
})
