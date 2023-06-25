import { Chatflow, ChatflowDTO } from './Chatflow'

export interface ChatbotDTO {
  id: string
  name: string
  flows: ChatflowDTO[]
}

export interface ChatbotProps {
  id: string
  name: string
  flows: Chatflow[]
}

export class Chatbot implements ChatbotProps {
  readonly id: string
  readonly name: string
  readonly flows: Chatflow[]

  constructor(props: ChatbotProps) {
    this.id = props.id
    this.name = props.name
    this.flows = props.flows
  }

  static fromArrayDTO(array: ChatbotDTO[]): Chatbot[] {
    return array?.map(this.fromDTO) || []
  }

  static fromDTO(dto: ChatbotDTO): Chatbot {
    return new Chatbot({
      ...dto,
      flows: Chatflow.fromArrayDTO(dto.flows),
    })
  }
}
