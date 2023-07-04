import React from 'react'
import ReactFlow, {
  Background,
  BackgroundVariant,
  useEdgesState,
  useNodesState,
  useReactFlow,
} from 'reactflow'
import styled from 'styled-components'
import { v4 as uuid } from 'uuid'
import { Dialog } from '../../../models/Dialog'
import AppContext from '../../../services/contexts/AppContext'
import DialogNodeComponent from './flow/DialogNodeComponent'

const nodeTypes = {
  [DialogNodeComponent.Type]: DialogNodeComponent,
}

export default function ChatflowEditor() {
  const { selectedChatflow: chatflow } = React.useContext(AppContext)

  const [initialNodes] = React.useMemo(() => chatflow.getGraph(), [chatflow])

  const { addNodes } = useReactFlow<Dialog>()
  const [nodes, setNodes, onNodesChange] = useNodesState<Dialog>(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState([])

  return (
    <Container>
      <button
        style={{ cursor: 'pointer', zIndex: 999999 }}
        onClick={() => {
          const id = uuid()
          const position = { x: 300, y: 300 }
          addNodes({
            id,
            data: new Dialog({
              id,
              title: 'none',
              message: '',
              options: [],
              position,
            }),
            position,
          })
        }}
      >
        add
      </button>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        proOptions={{ hideAttribution: true }}
        fitView
      >
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
        {/* <MiniMap position="bottom-right" /> */}
      </ReactFlow>
    </Container>
  )
}

const Container = styled.section`
  width: 100%;
  height: 100%;
  background-color: black;
`
