export interface Block {
  id: string
  weight: number
  title: string
  content: string
  color?: string
  status: 'active' | 'done'
}
