import styled from 'styled-components'
import ReactFlow, {
  Background,
  BackgroundVariant,
  useNodesState,
  useEdgesState,
  type Node,
} from 'reactflow'
import { Dialog } from '../../../models/Dialog'
import React from 'react'
import DialogNodeComponent, {
  type DialogNodeType,
} from './flow/DialogNodeComponent'

const initialNodes: Node<Dialog, DialogNodeType>[] = [
  {
    id: 'aa',
    type: DialogNodeComponent.Type,
    position: { x: 50, y: 50 },
    data: new Dialog({ id: 'aa', message: '', title: 'dialog1', options: [] }),
  },

  {
    id: 'bb',
    type: DialogNodeComponent.Type,
    position: { x: 200, y: 100 },
    data: new Dialog({ id: 'bb', message: '', title: 'dialog2', options: [] }),
  },
]

export default function ChatflowEditor() {
  const [nodes, setNodes, onNodesChange] = useNodesState<Dialog>(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState([])

  const nodeTypes = React.useMemo(
    () => ({
      [DialogNodeComponent.Type]: DialogNodeComponent,
    }),
    [],
  )

  return (
    <Container>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
      >
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
        {/* <MiniMap /> */}
      </ReactFlow>
    </Container>
  )
}

const Container = styled.section`
  width: 100%;
  height: 100%;
  border: 1px solid red;
`
