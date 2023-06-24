import fastify from 'fastify'

const [port, host] = [3333, '0.0.0.0']

const app = fastify()

app.listen({ port, host }).then(() => {
  console.log(`Server running on port ${port}`)
})
