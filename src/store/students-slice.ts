import { StateCreator } from 'zustand'

import { StudentsStateProps } from '@/@types/store'
import { getStudents } from '@/api/get-students'

export const createStudentsSlice: StateCreator<StudentsStateProps, [], []> = (
  set,
  get,
) => ({
  students: null,
  isLoading: true,
  fetchData: async (page) => {
    try {
      const { students } = get()
      if (!students || page > 1) {
        const { results } = await getStudents(page)
        set((state) => ({
          students: state.students ? [...state.students, ...results] : results,
        }))
      }
    } catch (error) {
      console.error(error)
    } finally {
      set(() => ({
        isLoading: false,
      }))
    }
  },
})
