import { create } from 'zustand'

import { SearchStateProps } from '@/@types/store'

export const useSearchStore = create<SearchStateProps>((set) => ({
  search: '',
  handleSearch: (search) =>
    set(() => ({
      search,
    })),
}))
