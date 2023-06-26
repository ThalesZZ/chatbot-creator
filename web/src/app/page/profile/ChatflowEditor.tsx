import styled from 'styled-components'
import ReactFlow, {
  Background,
  BackgroundVariant,
  useNodesState,
  useEdgesState,
} from 'reactflow'
import { Dialog } from '../../../models/Dialog'
import React from 'react'
import DialogNodeComponent from './flow/DialogNodeComponent'
import { useSelector } from 'react-redux'
import type { AppStore, AppState } from '../../../services/store/states'

const nodeTypes = {
  [DialogNodeComponent.Type]: DialogNodeComponent,
}

export default function ChatflowEditor() {
  const { selectedChatflow: chatflow } = useSelector<AppStore, AppState>(
    ({ app }) => app,
  )

  const [initialNodes] = React.useMemo(() => chatflow.getGraph(), [chatflow])

  const [nodes, setNodes, onNodesChange] = useNodesState<Dialog>(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState([])

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
