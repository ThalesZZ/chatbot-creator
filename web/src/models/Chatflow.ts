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
  config: any // TODO
  createdAt: Date
  updatedAt: Date
}

export class Chatflow implements ChatflowProps {
  readonly id: string
  readonly name: string
  readonly config: any
  readonly createdAt: Date
  readonly updatedAt: Date

  constructor(props: ChatflowProps) {
    this.id = props.id
    this.name = props.name
    this.config = props.config
    this.createdAt = props.createdAt
    this.updatedAt = props.updatedAt
  }

  static fromArrayDTO(array: ChatflowDTO[]): Chatflow[] {
    return array?.map(this.fromDTO) || []
  }

  static fromDTO(dto: ChatflowDTO): Chatflow {
    return new Chatflow({
      ...dto,
      config: JSON.parse(dto.configJSON || '{}'),
      createdAt: new Date(dto.createdAt),
      updatedAt: new Date(dto.updatedAt),
    })
  }
}
