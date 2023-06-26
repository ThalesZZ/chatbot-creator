import { v4 as uuid } from 'uuid'
import { type DialogNodeType } from '../app/page/profile/flow/DialogNodeComponent'
import type { Node, XYPosition } from 'reactflow'

export type DialogOption = {
  id: string
  label: string
  value: string
}

export interface DialogDTO {
  id: string
  title: string
  message: string
  options: { id: string; label: string; value: string }[]
  position: { x: number; y: number }
}

export interface DialogProps {
  id?: string
  title: string
  message: string
  options: DialogOption[]
  position: XYPosition
}

export class Dialog implements DialogProps {
  readonly id: string
  readonly title: string
  readonly message: string
  readonly options: DialogOption[]
  readonly position: XYPosition

  constructor(props: DialogProps) {
    this.id = props.id || uuid()
    this.title = props.title
    this.message = props.message
    this.options = props.options
  }

  toNode(): Node<Dialog, DialogNodeType> {
    return { id: this.id, data: this, position: { x: 0, y: 0 } }
  }

  static fromArrayDTO(array: DialogDTO[]): Dialog[] {
    return array?.map(Dialog.fromDTO) || []
  }

  static fromDTO(dto: DialogDTO): Dialog {
    return new Dialog({ ...dto })
  }
}
