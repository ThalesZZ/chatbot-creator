import { v4 as uuid } from 'uuid'

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
}

export interface DialogProps {
  id?: string
  title: string
  message: string
  options: DialogOption[]
}

export class Dialog implements DialogProps {
  readonly id: string
  readonly title: string
  readonly message: string
  readonly options: DialogOption[]

  constructor(props: DialogProps) {
    this.id = props.id || uuid()
    this.title = props.title
    this.message = props.message
    this.options = props.options
  }
}
