import styled from 'styled-components'
import ReactFlow from 'reactflow'

export default function ChatflowEditor() {
  return (
    <Container>
      <ReactFlow></ReactFlow>
    </Container>
  )
}

const Container = styled.section`
  width: 100%;
  height: 100%;
  border: 1px solid red;
`
