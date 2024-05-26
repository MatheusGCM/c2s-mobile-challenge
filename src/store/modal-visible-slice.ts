import { StateCreator } from 'zustand'

import { ModalVisibleStateProps } from '@/@types/store'

export const createModalVisibleSlice: StateCreator<
  ModalVisibleStateProps,
  [],
  []
> = (set) => ({
  modalVisible: false,
  closeModal: () => set(() => ({ modalVisible: false })),
})
