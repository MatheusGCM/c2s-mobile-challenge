import { create } from 'zustand'

import { FilterStateProps } from '@/@types/store'

export const useFilterStore = create<FilterStateProps>((set, get) => ({
  search: '',
  filterGender: null,
  handleFilterGender: (filterGender) =>
    set(() => ({
      filterGender,
    })),
  handleSearch: (search) =>
    set(() => ({
      search,
    })),

  handleCleanFilters: () => {
    const { search, filterGender } = get()
    if (search || filterGender) {
      set(() => ({ search: '', filterGender: null }))
    }
  },
}))
