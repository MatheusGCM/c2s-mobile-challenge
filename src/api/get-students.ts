import { StudentResponse } from '@/@types/student'
import { api } from '@/lib/axios'

export async function getStudents(page: number) {
  const { data } = await api.get<StudentResponse>('', { params: { page } })

  return data
}
