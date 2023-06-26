import { type DialogNodeType } from '../app/page/profile/flow/DialogNodeComponent'
import { Dialog } from './Dialog'
import { type Node } from 'reactflow'

export interface ChatflowDTO {
  id: string
  name: string
  configJSON: string
  createdAt: string
  updatedAt: string
}

export interface ChatflowProps {
  id: string
  name: string
  config: Dialog[]
  createdAt: Date
  updatedAt: Date
}

export class Chatflow implements ChatflowProps {
  readonly id: string
  readonly name: string
  readonly config: Dialog[]
  readonly createdAt: Date
  readonly updatedAt: Date

  constructor(props: ChatflowProps) {
    this.id = props.id
    this.name = props.name
    this.config = props.config
    this.createdAt = props.createdAt
    this.updatedAt = props.updatedAt
  }

  getGraph(): [Node<Dialog, DialogNodeType>[]] {
    const nodes: Node<Dialog, DialogNodeType>[] = this.config.map((dialog) =>
      dialog.toNode(),
    )

    return [nodes]
  }

  static fromArrayDTO(array: ChatflowDTO[]): Chatflow[] {
    return array?.map(this.fromDTO) || []
  }

  static fromDTO(dto: ChatflowDTO): Chatflow {
    return new Chatflow({
      ...dto,
      config: Dialog.fromArrayDTO(JSON.parse(dto.configJSON || '[]')),
      createdAt: new Date(dto.createdAt),
      updatedAt: new Date(dto.updatedAt),
    })
  }
}
