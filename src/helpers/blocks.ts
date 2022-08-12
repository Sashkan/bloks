import { Block } from '../types/types'

export const makeBlock = (
  id: string = '',
  title: string = '',
  content: string = '',
  weight: number = 1
): Block => ({
  id,
  title,
  content,
  weight,
  status: 'active',
})
