import { StateCreator } from 'zustand'

import {
  ModalVisibleStateProps,
  StudentDetailsStateProps,
} from '@/@types/store'

export const createStudentDetailsSlice: StateCreator<
  StudentDetailsStateProps & ModalVisibleStateProps,
  [],
  [],
  StudentDetailsStateProps
> = (set) => ({
  studentDetails: null,
  handleSelectedStudent: (studentDetails) =>
    set(() => ({ studentDetails, modalVisible: true })),
})
