import { StateCreator } from 'zustand'

import { PageStateProps, StudentsStateProps } from '@/@types/store'

export const createPageSlice: StateCreator<
  PageStateProps & StudentsStateProps,
  [],
  [],
  PageStateProps
> = (set, get) => ({
  page: 1,
  handleLoadMore: () => {
    const { page, students } = get()
    if (students) {
      set(() => ({ page: page + 1 }))
    }
  },
})
