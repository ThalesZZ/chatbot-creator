import fastify from 'fastify'
import { chatbotRoutes } from './routes/chatbot'
import cors from '@fastify/cors'

const port = 3333

const app = fastify()
app.register(cors)
app.register(chatbotRoutes)

app.listen({ port }).then(() => {
  console.log(`Server running on port ${port}`)
})
