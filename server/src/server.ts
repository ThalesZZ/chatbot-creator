import fastify from 'fastify'
import { chatbotRoutes } from './routes/chatbot'

const [port, host] = [3333, '0.0.0.0']

const app = fastify()
app.register(chatbotRoutes)

app.listen({ port, host }).then(() => {
  console.log(`Server running on port ${port}`)
})
