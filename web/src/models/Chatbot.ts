export interface ChatbotDTO {
  id: string
  name: string
  createdAt: string
  updatedAt: string
}

export interface ChatbotProps {
  id: string
  name: string
  createdAt: Date
  updatedAt: Date
}

export class Chatbot implements ChatbotProps {
  readonly id: string
  readonly name: string
  readonly createdAt: Date
  readonly updatedAt: Date

  constructor(props: ChatbotProps) {
    this.id = props.id
    this.name = props.name
    this.createdAt = props.createdAt
    this.updatedAt = props.updatedAt
  }

  static fromArrayDTO(array: ChatbotDTO[]): Chatbot[] {
    return array.map(this.fromDTO)
  }

  static fromDTO(dto: ChatbotDTO): Chatbot {
    return new Chatbot({
      ...dto,
      createdAt: new Date(dto.createdAt),
      updatedAt: new Date(dto.updatedAt),
    })
  }
}
