import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

import {
  createStudentsSlice,
  createPageSlice,
  createStudentDetailsSlice,
  createModalVisibleSlice,
} from './'

import {
  StudentsStateProps,
  PageStateProps,
  StudentDetailsStateProps,
  ModalVisibleStateProps,
} from '@/@types/store'

type StoreStateProps = StudentsStateProps &
  PageStateProps &
  StudentDetailsStateProps &
  ModalVisibleStateProps

export const useBoundStore = create<StoreStateProps>()(
  persist(
    (...a) => ({
      ...createStudentsSlice(...a),
      ...createPageSlice(...a),
      ...createStudentDetailsSlice(...a),
      ...createModalVisibleSlice(...a),
    }),
    {
      name: 'c2s-mobile-challenge:students',
      partialize: (state) => ({ students: state.students?.slice(0, 20) }),
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
)
